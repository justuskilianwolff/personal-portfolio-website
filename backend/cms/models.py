from django.core.exceptions import ValidationError
from django.db import models

# type Translation = {
# 	de: string;
# 	en: string;
# };

# type Link = {
# 	url: string;
# 	title: Translation;
# };
# type Image = {
# 	url: string;
# 	alt: Translation;
# 	link: Link;
# };
# type Technology = {
# 	name: Translation;
# 	logo: Image;
# };

# type Project = {
# 	title: Translation;
# 	subtitle: Translation;
# 	description: Translation;
# 	technologies: Technology[];
# 	links: Link[];
# };


class PersonalInfoManager(models.Manager):
    def get_or_create(self):
        if not self.all().exists():
            return super().get_or_create()
        return self.all().first(), False


class PersonalInfo(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    about = models.TextField()
    # Add other fields as needed

    objects = PersonalInfoManager()

    def save(self, *args, **kwargs):
        if not self.pk and PersonalInfo.objects.exists():
            raise ValidationError("There can be only one PersonalInfo instance")
        return super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        pass  # Prevent deletion of the single instance

    class Meta:
        verbose_name_plural = "Personal Information"

    def __str__(self):
        return self.name
