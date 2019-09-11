from django.conf.urls import url
from . import views

app_name = 'blog'

urlpatterns = [
	url(r'^contact', views.post_contact, name='post_contact'),
	url(r'^about', views.post_about, name='post_about'),
	url(r'^posts/(?P<pk>[0-9]+)/remove/$', views.post_remove, name='post_remove'),
	url(r'^posts/(?P<pk>[0-9]+)/publish/$', views.post_publish, name='post_publish'),
	url(r'^drafts/$', views.post_draft_list, name='post_draft_list'),
	url(r'^posts/(?P<pk>[0-9]+)/edit/$', views.post_edit, name='post_edit'),
	url(r'^posts/new/$', views.post_new, name='post_new'),
	url(r'^posts/(?P<pk>[0-9]+)/$', views.post_detail, name='post_detail'),
	url(r'^$', views.post_list, name='post_list'),
]


