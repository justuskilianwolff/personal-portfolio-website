from django.contrib import admin
from solo.admin import SingletonModelAdmin

from .models import IconLink, Link, PersonalInfo

admin.site.register(PersonalInfo, SingletonModelAdmin)
admin.site.register(IconLink)
admin.site.register(Link)
