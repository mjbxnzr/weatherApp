from django.db import models

class City(models.Model):
   id = models.AutoField(primary_key=True)
   Name = models.CharField(max_length=100)
   class Meta:
      db_table = 'City'



