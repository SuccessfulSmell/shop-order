""" Service for managing work with products. """
from .client import ToolsClient, EtpromClient
from .models import Categories, MainCategory, SubCategory, Products, Providers


class BaseService:
    """ Base service instance. """

    provider = ''

    @staticmethod
    def update_sub_categories(category: str) -> tuple:
        """ Update SubCategory model fields.

        :param category: category name.
        :return:         tuple(category_obj, True/False)
        """
        category_obj, created = SubCategory.objects.get_or_create(sub_category=category)
        return category_obj, created

    @staticmethod
    def update_main_categories(category: str) -> tuple:
        """ Update MainCategory model fields.

        :param category: main category name.
        :return:         tuple(category_obj, True/False)
        """
        category_obj, created = MainCategory.objects.get_or_create(main_category=category)
        return category_obj, created

    def update_categories(self, category: MainCategory, sub_categories: list) -> tuple:
        """ Update MainCategory model fields.

        :param category:       main category.
        :param sub_categories: list of sub categories
        :return:               tuple(category_obj, True/False)
        """
        category_obj, created = Categories.objects.get_or_create(main_category=category)
        if category_obj:
            for sub_category in sub_categories:
                sub_category_obj, sub_created = self.update_sub_categories(sub_category)
                if sub_category_obj:
                    category_obj.sub_category.add(sub_category_obj)
        return category_obj, created

    def update_products(self, product: dict, category: SubCategory) -> tuple:
        """ Add or update products in DataBase from tools.by

        :param product:  product data in dict.
        :param category: category objects.
        :return:         tuple(product_obj, True/False)
        """
        provider, created = Providers.objects.get_or_create(providers_name=self.provider)
        product['provider'] = provider
        product['category'] = category
        product_name = product.get('name', '')
        product_obj, created = Products.objects.update_or_create(name=product_name,
                                                                 defaults=product)
        return product_obj, created


class ToolsByService(BaseService, ToolsClient):
    provider = r'tools.by'

    def __update_categories_tree(self) -> None:
        """ Update tools.by categories. """
        categories_tree = self.get_categories_tree()
        for main_category in categories_tree:
            main_category_key = list(main_category.keys())[0]
            sub_category_values = list(main_category.values())[0]
            category_obj, created = self.update_main_categories(main_category_key)
            if category_obj:
                self.update_categories(category_obj, sub_category_values)

    def update_data(self) -> dict:
        """ Get products from tools.by and DataBase updating.

        :return: updating status.
        """
        try:
            self.__update_categories_tree()
            products = self.get_products()
            for product in products:
                category_obj, created = self.update_sub_categories(product.category)
                self.update_products(product.dict(), category_obj)
            return {'status': 'OK', 'code': 200,
                    'message': f'Данные были обновлены ({self.provider})'}
        except Exception as error:
            return {'status': 'error', 'code': 500,
                    'message': f'Ошибка при обновлении данных с {self.provider}',
                    'error_msg': f'{error}'}


class EtpromByService(BaseService, EtpromClient):
    provider = r'etprom.by'

    def __update_categories_tree(self) -> None:
        """ Update Etprom categories. """
        categories_tree = self.get_categories_tree()
        for main_category in categories_tree:
            main_category_key = list(main_category.keys())[0]
            sub_category_values = list(main_category.values())[0]
            category_obj, created = self.update_main_categories(main_category_key)
            if category_obj:
                self.update_categories(category_obj, sub_category_values)

    def update_data(self) -> dict:
        """ Get products from tools.by and DataBase updating.

        :return: updating status.
        """
        try:
            self.__update_categories_tree()
            products = self.get_products()
            for product in products:
                category_obj, created = self.update_sub_categories(product.category)
                self.update_products(product.dict(), category_obj)
            return {'status': 'OK', 'code': 200,
                    'message': f'Данные были обновлены ({self.provider})'}
        except Exception as error:
            return {'status': 'error', 'code': 500,
                    'message': f'Ошибка при обновлении данных с {self.provider}',
                    'error_msg': f'{error}'}
