from django.db import models


class MainCategory(models.Model):
    main_category = models.CharField(verbose_name='Главная категория', max_length=200, default='', blank=True, null=True)

    def __str__(self):
        return self.main_category

    class Meta:
        db_table = 'main_category'
        verbose_name = 'Заглавные категории товаров'
        verbose_name_plural = 'Заглавные категории товаров'


class SubCategory(models.Model):
    discount = models.IntegerField(verbose_name='Скидка', default=0, blank=True, null=True)
    sub_category = models.CharField(verbose_name='Подкатегория', max_length=200, default='', blank=True, null=True)

    def __str__(self):
        return self.sub_category

    class Meta:
        db_table = 'sub_category'
        verbose_name = 'Подкатегории товаров'
        verbose_name_plural = 'Подкатегории товаров'


class Categories(models.Model):
    main_category = models.ForeignKey(MainCategory, verbose_name='заглавные категория', on_delete=models.CASCADE, blank=True)
    sub_category = models.ManyToManyField(SubCategory, verbose_name='подкатегории', blank=True)

    def __str__(self):
        return f'{self.main_category}'

    class Meta:
        db_table = 'categories'
        verbose_name = 'Категории товаров'
        verbose_name_plural = 'Категории товаров'


class Providers(models.Model):
    providers_name = models.CharField(verbose_name='Подкатегория', max_length=20, default='', blank=True, null=True)

    def __str__(self):
        return self.providers_name

    class Meta:
        db_table = 'providers'
        verbose_name = 'Провайдеры данных'
        verbose_name_plural = 'Провайдеры данных'


class Products(models.Model):
    name = models.CharField(verbose_name='Название товара', max_length=100, default='', blank=True, null=True)
    article = models.CharField(verbose_name='article', max_length=15, default='', blank=True, null=True)
    price = models.FloatField(verbose_name='Цена', default=0, blank=True, null=True)
    price_rec = models.CharField(verbose_name='Rec цена', max_length=10, default='', blank=True, null=True)
    price_opt = models.CharField(verbose_name='Оптовая цена', max_length=10, default='', blank=True, null=True)
    currency = models.CharField(verbose_name='Валюта', max_length=10, default='', blank=True, null=True)
    product_id = models.CharField(verbose_name='ID', max_length=10, default='', blank=True, null=True)
    url = models.CharField(verbose_name='Ссылка на товар', max_length=100, default='', blank=True, null=True)
    picture = models.CharField(verbose_name='Ссылка на товар', max_length=100, default='', blank=True, null=True)
    description = models.TextField(verbose_name='Описание товара', default='', blank=True, null=True)
    available = models.BooleanField(verbose_name='Доступно сейчас', default=False, blank=True, null=True)
    provider = models.ForeignKey(Providers, verbose_name='Провайдер', on_delete=models.CASCADE, blank=True)
    category = models.ForeignKey(SubCategory, verbose_name='Категории', on_delete=models.CASCADE, blank=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'products'
        verbose_name = 'Товары'
        verbose_name_plural = 'Товары'
