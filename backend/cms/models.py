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


class PersonalInfo(SingletonModel):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    about = models.TextField()
    # Add other fields as needed

    def delete(self, *args, **kwargs):
        pass  # Prevent deletion of the single instance

    class Meta:
        verbose_name_plural = "Personal Information"

    def __str__(self):
        return self.name
