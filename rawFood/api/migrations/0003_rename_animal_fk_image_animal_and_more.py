# Generated by Django 4.2.2 on 2023-08-22 02:50

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_animal_image_part_ratio_delete_protein_image_part_fk'),
    ]

    operations = [
        migrations.RenameField(
            model_name='image',
            old_name='animal_fk',
            new_name='animal',
        ),
        migrations.RenameField(
            model_name='image',
            old_name='part_fk',
            new_name='part',
        ),
        migrations.RenameField(
            model_name='ratio',
            old_name='animal_fk',
            new_name='animal',
        ),
        migrations.RenameField(
            model_name='ratio',
            old_name='part_fk',
            new_name='part',
        ),
    ]