# Generated by Django 4.2.2 on 2023-08-22 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_alter_ratio_bone_alter_ratio_meat_alter_ratio_organ'),
    ]

    operations = [
        migrations.AddConstraint(
            model_name='ratio',
            constraint=models.UniqueConstraint(fields=('animal', 'part'), name='unique_ratio_animal_part'),
        ),
    ]
