from django.contrib import admin
from solo.admin import SingletonModelAdmin

from .models import IconLinks, PersonalInfo

admin.site.register(PersonalInfo, SingletonModelAdmin)
admin.site.register(IconLinks)
