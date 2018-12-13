from django.conf.urls import url 
from . import views

app_name = 'blog'

urlpatterns = [
    url(r'^$', views.post_list, name='post_list'),
	url(r'^(?P<pk>[0-9]+)/post_detail', views.post_detail, name='post_detail'),
]


