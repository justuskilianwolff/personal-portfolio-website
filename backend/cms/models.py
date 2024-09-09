from django.db import models
from solo.models import SingletonModel

# type Translation = {
# 	de: string;
# 	en: string;
# };

# type Link = {
# 	url: string;
# 	title: Translation;
# };

# type Project = {
# 	title: Translation;
# 	subtitle: Translation;
# 	description: Translation;
# 	technologies: Technology[];
# 	links: Link[];
# };

# Projects, Work


class PersonalInfo(SingletonModel):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    about = models.TextField()
    links = models.ManyToManyField("IconLinks")


    class Meta:
        verbose_name = "Personal Information"

    def __str__(self):
        return self.name


class IconLinks(models.Model):
    name = models.CharField(max_length=100)
    iconify_logo = models.CharField(max_length=100)
    link = models.URLField()

    class Meta:
        verbose_name_plural = "Icon Links"

    def __str__(self):
        return self.name
