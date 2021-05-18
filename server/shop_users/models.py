from django.db import models
from django.contrib.auth.models import User

from shop_products.models import Products


class UserDiscount(models.Model):
    user = models.ForeignKey(verbose_name='Пользователь', to=User, on_delete=models.CASCADE)
    discount = models.IntegerField(verbose_name='Скидка', default=0, blank=True, null=True)

    class Meta:
        db_table = 'user_discounts'
        verbose_name = 'Скидка пользователя'
        verbose_name_plural = 'Скидка пользователя'


class ProductsInOrder(models.Model):
    user = models.ForeignKey(verbose_name='Пользователь', to=User, on_delete=models.CASCADE)
    product_count = models.IntegerField(verbose_name='Кол-во', default=0, blank=True, null=True)
    product = models.ForeignKey(Products, verbose_name='Товар', on_delete=models.CASCADE,
                                blank=True)

    def __str__(self):
        return f'{self.user} - {self.product_count} - {self.product}'

    class Meta:
        db_table = 'products_in_orders'
        verbose_name = 'Товары в заказе'
        verbose_name_plural = 'Товары в заказе'


class UserOrder(models.Model):
    user = models.ForeignKey(verbose_name='Пользователь', to=User, on_delete=models.CASCADE)
    address = models.CharField(verbose_name='Адрес', max_length=200, default='', blank=True, null=True)
    phone = models.CharField(verbose_name='Телефон', max_length=200, default='', blank=True, null=True)
    pay_type = models.CharField(verbose_name='Способ оплаты', max_length=200, default='', blank=True, null=True)
    comment = models.TextField(verbose_name='Комментарий к заказу', default='', blank=True, null=True)
    total_price = models.FloatField(verbose_name='Итого (BYN)', default=0, blank=True, null=True)
    products = models.ManyToManyField(ProductsInOrder, verbose_name='Товары в заказе', blank=True)
    date = models.DateTimeField(blank=True, null=True, auto_now_add=True)

    class Meta:
        db_table = 'user_orders'
        verbose_name = 'История заказов пользоватей'
        verbose_name_plural = 'История заказов пользоватей'
