# -*- coding: utf-8 -*-
""" Third party API clients. """
import json
import requests
import xmltodict

from .data_models import Product
from nested_lookup import nested_lookup


class BaseClient:
    """ Base client instance. """

    def __init__(self):
        self.session = requests.Session()

    def get_data(self, url: str, params: dict, format: str = 'json'):
        """ GET method for simple API.

        :param url:    base url.
        :param params: request params.
        :param format: format of response (xml/json/text)
        :return:       response from API.
        """
        response = self.session.get(url, params=params)
        if format == 'xml':
            return xmltodict.parse(response.text)
        elif format == 'json':
            return response.json()
        else:
            return response.text


class ToolsClient(BaseClient):
    """ Tools by parser. """

    base_url = r'https://www.tools.by/tools_yml_kat.php?unp=690387122'

    def __get_offers(self) -> list:
        """ Get list of offers from tools.by

        :return: list of offers.
        """
        response = self.get_data(url=self.base_url, params={}, format='xml')
        offers = nested_lookup('offer', response)
        if offers:
            return offers[0]
        else:
            return offers

    def get_products(self) -> list:
        """ Get list of all data models products from tools.by

        :return: list of products models.
        """
        products = []
        offers = self.__get_offers()
        for offer in offers:
            dict_data = json.dumps(offer, ensure_ascii=False)
            product = dict_data.replace('null', '"null"').replace('none', '"none"')
            products.append(Product.parse_raw(product))
        return products


class EtpromClient(BaseClient):
    """ Etprom client. """

    base_url = r'https://etprom.by/upload/acrit.exportpro/f245f58d-26a1-11e4-9f8d-002590371a77.xml'

    @staticmethod
    def get_categories(response: dict) -> list:
        """ Get list of all categories.

        :param response:  response from etprom.by
        :return:          list of categories.
        """
        return nested_lookup('category', response)

    @staticmethod
    def __get_product_category(categories: dict, category_id: int) -> str:
        """ Get category by category ID.

        :param categories:  list of categories.
        :param category_id: ID of category.
        :return:            category name.
        """
        for category in categories[0]:
            if category_id == category.get('@id', ''):
                return category.get('#text', '').encode('iso-8859-1').decode('cp1251')
        return ''

    def _parse_product(self, product: dict, categories: dict) -> dict:
        """ Parse product response.

        :param product:     product instance.
        :param categories:  list of categories.
        :return:            formed product .json response.
        """
        category_id = product.get('categoryId', '')
        category_name = self.__get_product_category(categories, category_id)

        return {
            '@id': product.get('@id', ''),
            '@available': product.get('@available', ''),
            'url': product.get('url', ''),
            'price': product.get('url', ''),
            'currency': product.get('currencyId', ''),
            'categoryName': category_name,
            'picture': product.get('picture', ''),
            'name': product.get('name', '').encode('iso-8859-1').decode('cp1251'),
            'description': product.get('description', '').encode('iso-8859-1').decode(
                'cp1251'),

            'article': '',
            'priceRec': '',
            'priceOpt': '',
            'currencyId': '',
        }

    def get_products(self) -> list:
        """ Get list of all products.

        :return:  list of product instances.
        """
        response = self.get_data(url=self.base_url, params={}, format='xml')
        categories = self.get_categories(response)
        products = nested_lookup('offer', response)
        product_data = []
        if response:
            for product in products[0]:
                product = self._parse_product(product, categories)
                product = Product.parse_raw(json.dumps(product))
                product_data.append(product)
        return product_data

    def get_categories_tree(self) -> list:
        """ Get tree of categories.

        :return: tree of categories.
        """
        response = self.get_data(url=self.base_url, params={}, format='xml')
        categories = self.get_categories(response)

        categories_list = []
        for category in categories[0]:
            if '@parentId' not in category:
                child_categories = []
                for child_category in categories[0]:
                    if category.get('@id') == child_category.get('@parentId', ''):
                        text = child_category.get('#text', '').encode('iso-8859-1').decode('cp1251')
                        child_categories.append(text)
                category_text = category.get('#text', '').encode('iso-8859-1').decode('cp1251')
                data = {category_text: child_categories}
                categories_list.append(data)
        return categories_list
