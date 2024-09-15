from django.db import models
from markdownx.models import MarkdownxField
from solo.models import SingletonModel


class PersonalInfo(SingletonModel):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    about = models.TextField()
    links = models.ManyToManyField("IconLink", blank=True)

    class Meta:
        verbose_name = "Personal Information"

    def __str__(self):
        return self.name


class Link(models.Model):
    url = models.URLField()
    name = models.CharField(max_length=100)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class TextLink(Link):
    class Meta:
        verbose_name = "Text Link"
        verbose_name_plural = "Text Links"


class IconLink(Link):
    iconify_logo = models.CharField(max_length=100)

    class Meta:
        verbose_name = "Icon Link"
        verbose_name_plural = "Icon Links"


class Milestone(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()

    def __str__(self):
        return self.title


class Activity(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    description = MarkdownxField()
    technologies = models.ManyToManyField("IconLink")
    links = models.ManyToManyField("TextLink")

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class Project(Activity):
    technologies = models.ManyToManyField("IconLink", related_name="projects_technologies")
    links = models.ManyToManyField("TextLink", related_name="projects_links")


class Work(Activity):
    technologies = models.ManyToManyField("IconLink", related_name="works_technologies")
    links = models.ManyToManyField("TextLink", related_name="works_links")

    class Meta:
        verbose_name_plural = "Work"
