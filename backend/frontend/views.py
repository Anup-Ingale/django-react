import requests
from django.shortcuts import render, redirect
from .models import City
from .forms import CityForm
from django.http import HttpResponse
from django.http import JsonResponse
import  datetime

# def add_city(request,city):
#     url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1'
#     cities = City.objects.all()
#     weather_data = []
#     for city in cities:
#         r = requests.get(url.format(city)).json()
#         city_weather = {
#             'city': city.name,
#             'temperature': r["main"]["temp_min"],
#             'description': r["weather"][0]["description"],
#             'wind_flow': r["wind"]["speed"],
#             'icon': r["weather"][0]["icon"],
#         }
#         weather_data.append(city_weather)
#     context = {
#         'weather_data': weather_data,
#     }
#     return  JsonResponse(context)


def home(request):
    url = 'http://api.openweathermap.org/data/2.5/weather?q={}&units=imperial&appid=271d1234d3f497eed5b1d80a07b3fcd1'
    error_text = ''
    message = ''
    message_class = ''
    if request.method == "POST":
        form = CityForm(request.POST)
        if form.is_valid():
            new_city = form.cleaned_data['name']
            existing_city_count = City.objects.filter(name=new_city).count()
            if existing_city_count == 0:
                r = requests.get(url.format(new_city)).json()
                date_name = r['dt']
                date_m = datetime.datetime.fromtimestamp(date_name)
                print(date_m.strftime('%Y-%m-%d'))
                if r['cod'] == 200:
                    form.save()
                else:
                    error_text = 'City does not exist in this world!'
            else:
                error_text = 'City already exists In DB!'
        if error_text:
            message = error_text
            message_class = "is-danger"
        else:
            message = "City added succesfully!"
            message_class = "is-success"

    form = CityForm()
    cities = City.objects.all()
    weather_data = []

    for city in cities:
        r = requests.get(url.format(city)).json()
        city_weather = {
            'city': city.name,
            'temperature': r["main"]["temp_min"],
            'description': r["weather"][0]["description"],
            'wind_flow': r["wind"]["speed"],
            'icon': r["weather"][0]["icon"],
        }
        weather_data.append(city_weather)
    context = {
        'weather_data' : weather_data,
        'form' : form,
        'message' : message,
        'message_class' : message_class,
    }
    return render(request, 'web.html', context)


def delete_city(request, city_name):
    City.objects.get(name=city_name).delete()
    return redirect('home')
    # return json.dumps('home')