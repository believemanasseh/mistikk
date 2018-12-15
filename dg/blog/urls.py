from django.conf.urls import url 
from . import views

app_name = 'blog'

urlpatterns = [
	url(r'^posts/(?P<pk>[0-9]+)/edit/$', views.post_edit, name='post_edit'),
	url(r'^posts/new/$', views.post_new, name='post_new'),
	url(r'^posts/(?P<pk>[0-9]+)/$', views.post_detail, name='post_detail'),
	url(r'^$', views.post_list, name='post_list'),
]


