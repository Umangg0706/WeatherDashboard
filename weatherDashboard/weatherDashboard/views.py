# views.py
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializer import UserSerializer
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests

API_KEY = "ecbbfe19561d0e8151fc726887d87f5c"


# Utility function to fetch data from the weather API
def fetch_weather_data(city, filter):
    base_url = "https://api.openweathermap.org/data/2.5/forecast"
    params = {"q": city, "appid": API_KEY, "units": "metric"}

    # Make the request to the API
    try:
        response = requests.get(base_url, params=params)
        data = response.json()

        # Check if the response contains valid weather data
        if response.status_code == 200 and "list" in data:
            return filter_weather_data(data, filter)
        else:
            return {"error": "City not found or API error"}
    except Exception as e:
        return {"error": str(e)}


# Utility function to filter weather data
def filter_weather_data(data, filter):
    if filter == "current":
        return data["list"][0]
    elif filter == "3hours":
        return data["list"][1]
    elif filter == "6hours":
        return data["list"][2]
    elif filter == "1day":
        return data["list"][8]  # 8th index corresponds to 24 hours (3-hour intervals)
    elif filter == "3days":
        return data["list"][24]  # 24th index corresponds to 72 hours (3-day forecast)
    else:
        return {"error": "Invalid filter"}


# View to handle weather data for 'current' filter
@csrf_exempt
def get_current_weather(request):
    city = request.GET.get("city")
    if city:
        data = fetch_weather_data(city, "current")
        return JsonResponse(data, safe=False)

    return JsonResponse({"error": "City not provided"}, status=400)


# View to handle weather data for '3 hours' filter
@csrf_exempt
def get_3hours_weather(request):
    city = request.GET.get("city")
    if city:
        data = fetch_weather_data(city, "3hours")
        return JsonResponse(data, safe=False)
    return JsonResponse({"error": "City not provided"}, status=400)


# View to handle weather data for '6 hours' filter
@csrf_exempt
def get_6hours_weather(request):
    city = request.GET.get("city")
    if city:
        data = fetch_weather_data(city, "6hours")
        return JsonResponse(data, safe=False)
    return JsonResponse({"error": "City not provided"}, status=400)


# View to handle weather data for '1 day' filter
@csrf_exempt
def get_1day_weather(request):
    city = request.GET.get("city")
    if city:
        data = fetch_weather_data(city, "1day")
        return JsonResponse(data, safe=False)
    return JsonResponse({"error": "City not provided"}, status=400)


# View to handle weather data for '3 days' filter
@csrf_exempt
def get_3days_weather(request):
    city = request.GET.get("city")
    if city:
        data = fetch_weather_data(city, "3days")
        return JsonResponse(data, safe=False)
    return JsonResponse({"error": "City not provided"}, status=400)


@csrf_exempt
def login_view(request):
    if request.method == "POST":
        print(request.POST)
        username = request.POST.get("username")
        password = request.POST.get("password")
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return JsonResponse(
                {"message": "Login successful", "isAuthenticated": True}
            )
        else:
            return JsonResponse(
                {
                    "error": "Username or password is incorrect",
                    "isAuthenticatied": False,
                },
                status=400,
            )

    return JsonResponse({"error": "POST method required"}, status=400)


@csrf_exempt
def logout_view(request):
    if request.method == "POST":
        logout(request)
        return JsonResponse(
            {"message": "Logged out successfully", "isAuthenticated": False}
        )
    return JsonResponse({"error": "POST method required"}, status=400)


@api_view(["POST"])
def register_user(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User created successfully!"}, status=201)
    return Response(serializer.errors, status=400)


def home(request):
    return render(request, "home.html")
