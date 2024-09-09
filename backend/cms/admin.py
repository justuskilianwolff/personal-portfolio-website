from django.contrib import admin
from solo.admin import SingletonModelAdmin

from .models import PersonalInfo

admin.site.register(PersonalInfo, SingletonModelAdmin)
