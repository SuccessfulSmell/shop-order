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
