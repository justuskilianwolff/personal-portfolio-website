from django.contrib import admin
from solo.admin import SingletonModelAdmin

from .models import PersonalInfo, Technology

admin.site.register(PersonalInfo, SingletonModelAdmin)
admin.site.register(Technology)
