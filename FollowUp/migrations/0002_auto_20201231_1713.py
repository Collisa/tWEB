# Generated by Django 3.1.4 on 2020-12-31 16:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('FollowUp', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='person',
            options={'ordering': ('last_name', 'first_name'), 'verbose_name_plural': 'People'},
        ),
    ]
