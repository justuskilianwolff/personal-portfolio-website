from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin
from solo.admin import SingletonModelAdmin

from .models import IconLink, Milestone, PersonalInfo, Project, TextLink, Work

admin.site.register(PersonalInfo, SingletonModelAdmin)
admin.site.register(IconLink)
admin.site.register(TextLink)
admin.site.register(Milestone)
admin.site.register(Project, MarkdownxModelAdmin)
admin.site.register(Work, MarkdownxModelAdmin)
