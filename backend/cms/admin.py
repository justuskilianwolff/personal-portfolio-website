from django.contrib import admin
from solo.admin import SingletonModelAdmin

from .models import IconLink, PersonalInfo

admin.site.register(PersonalInfo, SingletonModelAdmin)
admin.site.register(IconLink)
