from django.db import models
from solo.models import SingletonModel

# type Project = {
# 	title: Translation;
# 	subtitle: Translation;
# 	description: Translation;
# 	technologies: Technology[];
# 	links: Link[];
# };

# Projects, Work, milestones (CV)


class PersonalInfo(SingletonModel):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    about = models.TextField()
    links = models.ManyToManyField("IconLink")

    class Meta:
        verbose_name = "Personal Information"

    def __str__(self):
        return self.name


class Link(models.Model):
    url = models.URLField()
    name = models.CharField(max_length=100)

    class Meta:
        abstract = False

    def __str__(self):
        return self.name


class IconLink(Link):
    iconify_logo = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Icon Links"
