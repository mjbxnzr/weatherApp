from django.db import models

class City(models.Model):
   id = models.AutoField(primary_key=True)
   Name = models.CharField(max_length=100)
   AuthorEmail = models.CharField(max_length=100)
   TimeStamp = models.DateTimeField(auto_now_add=True, blank=True)
   class Meta:
      db_table = 'City'



