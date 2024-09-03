from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def get_discounted_price(self):
        return float(self.price) * 0.9

    def __str__(self):
        return self.title
