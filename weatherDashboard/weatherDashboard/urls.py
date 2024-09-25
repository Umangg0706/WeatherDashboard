"""
URL configuration for weatherDashboard project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/register/", register_user, name="register_user"),
    path("", home, name="home"),
    path("api/login/", login_view, name="login_view"),
    path("api/logout/", logout_view, name="logout_view"),
    path("api/weather/current/", get_current_weather, name="get_current_weather"),
    path("api/weather/3hours/", get_3hours_weather, name="get_3hours_weather"),
    path("api/weather/6hours/", get_6hours_weather, name="get_6hours_weather"),
    path("api/weather/1day/", get_1day_weather, name="get_1day_weather"),
    path("api/weather/3days/", get_3days_weather, name="get_3days_weather"),
]
