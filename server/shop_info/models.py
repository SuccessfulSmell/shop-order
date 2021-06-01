from django.db import models


class SiteSettings(models.Model):
    title = models.CharField(verbose_name='Заголовок сайта', max_length=32, default='', blank=True, null=True)
    contact_phone = models.CharField(verbose_name='Контактный телефон', max_length=20, default='', blank=True, null=True)
    logist_phone = models.CharField(verbose_name='Телефон логиста', max_length=20, default='', blank=True, null=True)
    address = models.CharField(verbose_name='Юр.адрес', max_length=80, default='', blank=True, null=True)
    email = models.CharField(verbose_name='Почта', max_length=80, default='', blank=True, null=True)
    about_info = models.TextField(verbose_name='Информация о сайте', default='', blank=True, null=True)

    @staticmethod
    def get_instance():
        return SiteSettings.objects.get_or_create(pk=0)

    class Meta:
        db_table = 'site_settings'
        verbose_name = 'Настройки сайта'
        verbose_name_plural = 'Настройки сайта'


class AdminSales(models.Model):
    title = models.CharField(verbose_name='Заголовок акции', max_length=32, default='', blank=True, null=True)
    about_info = models.TextField(verbose_name='Описание акции', default='', blank=True, null=True)
    discount = models.IntegerField(verbose_name='Скидка', default=0, blank=True, null=True)
    photo = models.ImageField(verbose_name='Фон', default='', blank=True, null=True)

    class Meta:
        db_table = 'sales_settings'
        verbose_name = 'Акции'
        verbose_name_plural = 'Акции'
