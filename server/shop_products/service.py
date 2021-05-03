""" Service for managing work with products. """
from .client import ToolsClient
from .models import SubCategory, Products, Providers


class ToolsByService(ToolsClient):
    """ ToolsByService instance. """

    @staticmethod
    def __update_sub_categories(category: str) -> tuple:
        """ Update SubCategory model fields.

        :param category: category name.
        :return:         tuple(category_obj, True/False)
        """
        category_obj, created = SubCategory.objects.get_or_create(sub_category=category)
        return category_obj, created

    @staticmethod
    def __update_products(product: dict, category: SubCategory) -> tuple:
        """ Add or update products in DataBase from tools.by

        :param product:  product data in dict.
        :param category: category objects.
        :return:         tuple(product_obj, True/False)
        """
        provider, created = Providers.objects.get_or_create(providers_name='tools.by')
        product['provider'] = provider
        product['category'] = category
        product_name = product.get('name', '')
        product_obj, created = Products.objects.update_or_create(name=product_name,
                                                                 defaults=product)
        return product_obj, created

    def update_data(self):
        """ Get products from tools.by and DataBase updating.

        :return: updating status.
        """
        try:
            products = self.get_products()
            for product in products:
                category_obj, created = self.__update_sub_categories(product.category)
                self.__update_products(product.dict(), category_obj)
            return {'status': 'OK', 'code': 200, 'message': 'Данные были обновлены'}
        except Exception as error:
            return {'status': 'error', 'code': 500,
                    'message': 'Ошибка при обновлении данных с tools.by', 'error_msg': f'{error}'}
