﻿#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
RUN apt-get update && apt-get upgrade -y && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
RUN apt-get update && apt-get upgrade -y && apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY ["SampleApi/SampleApi.csproj", "SampleApi/"]
RUN dotnet restore "SampleApi/SampleApi.csproj"
COPY . .
WORKDIR "/src/SampleApi"
RUN dotnet build "SampleApi.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SampleApi.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SampleApi.dll"]