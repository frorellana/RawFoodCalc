# Generated by Django 4.2.2 on 2023-08-18 20:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Animal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('path', models.CharField(default='', max_length=255, unique=True)),
                ('animal_fk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.animal')),
            ],
        ),
        migrations.CreateModel(
            name='Part',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=255, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Ratio',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meat', models.DecimalField(decimal_places=5, default=0.0, max_digits=6)),
                ('organ', models.DecimalField(decimal_places=5, default=0.0, max_digits=6)),
                ('bone', models.DecimalField(decimal_places=5, default=0.0, max_digits=6)),
                ('animal_fk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.animal')),
                ('part_fk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.part')),
            ],
        ),
        migrations.DeleteModel(
            name='Protein',
        ),
        migrations.AddField(
            model_name='image',
            name='part_fk',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.part'),
        ),
    ]
