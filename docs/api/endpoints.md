---
id: endpoints
title: Endpoints de la API
sidebar_label: Endpoints
---

# Endpoints de la API

Nuestra API RESTful proporciona acceso a todos los datos y funcionalidades del sistema. A continuación se detallan los principales endpoints disponibles.

## Base URL

```
https://api.rastreo-transporte.com/v1
```

## Autenticación

Todos los endpoints requieren autenticación mediante token JWT. Consulta la [sección de autenticación](autenticacion) para más información.

## Vehículos

### Obtener todos los vehículos activos

```http
GET /vehicles/active
```

#### Parámetros de consulta

| Parámetro | Tipo   | Descripción                               |
| --------- | ------ | ----------------------------------------- |
| route_id  | string | Filtrar por ID de ruta (opcional)         |
| limit     | int    | Número máximo de resultados (defecto: 50) |

#### Respuesta

```json
{
  "status": "success",
  "data": [
    {
      "vehicle_id": "BUS-123",
      "route_id": "R-45",
      "position": {
        "latitude": 19.4326,
        "longitude": -99.1332,
        "accuracy": 5,
        "heading": 90,
        "speed": 25.4
      },
      "timestamp": "2025-04-14T14:28:43Z",
      "occupancy_status": "MANY_SEATS_AVAILABLE",
      "trip_id": "T-789"
    }
    // Más vehículos...
  ]
}
```

### Obtener un vehículo específico

```http
GET /vehicles/{vehicle_id}
```

#### Parámetros de ruta

| Parámetro  | Tipo   | Descripción           |
| ---------- | ------ | --------------------- |
| vehicle_id | string | ID único del vehículo |

#### Respuesta

```json
{
  "status": "success",
  "data": {
    "vehicle_id": "BUS-123",
    "route_id": "R-45",
    "position": {
      "latitude": 19.4326,
      "longitude": -99.1332,
      "accuracy": 5,
      "heading": 90,
      "speed": 25.4
    },
    "timestamp": "2025-04-14T14:28:43Z",
    "occupancy_status": "MANY_SEATS_AVAILABLE",
    "trip_id": "T-789"
  }
}
```

## Rutas

### Obtener todas las rutas

```http
GET /routes
```

#### Parámetros de consulta

| Parámetro   | Tipo   | Descripción                        |
| ----------- | ------ | ---------------------------------- |
| agency_id   | string | Filtrar por agencia (opcional)     |
| active_only | bool   | Solo rutas activas (defecto: true) |

#### Respuesta

```json
{
  "status": "success",
  "data": [
    {
      "route_id": "R-45",
      "agency_id": "AGENCY-1",
      "short_name": "45",
      "long_name": "Centro - Universidad",
      "route_type": "BUS",
      "color": "#FF0000",
      "active": true,
      "stops_count": 23
    }
    // Más rutas...
  ]
}
```

## Predicciones

### Obtener predicciones para una parada

```http
GET /predictions/stop/{stop_id}
```

#### Parámetros de ruta

| Parámetro | Tipo   | Descripción           |
| --------- | ------ | --------------------- |
| stop_id   | string | ID único de la parada |

#### Parámetros de consulta

| Parámetro | Tipo   | Descripción                               |
| --------- | ------ | ----------------------------------------- |
| route_id  | string | Filtrar por ID de ruta (opcional)         |
| limit     | int    | Número máximo de resultados (defecto: 10) |

#### Respuesta

```json
{
  "status": "success",
  "data": {
    "stop_id": "S-123",
    "stop_name": "Estación Central",
    "predictions": [
      {
        "route_id": "R-45",
        "trip_id": "T-789",
        "vehicle_id": "BUS-123",
        "arrival_time": "2025-04-14T14:35:00Z",
        "minutes": 7,
        "status": "ON_TIME",
        "occupancy_status": "MANY_SEATS_AVAILABLE"
      }
      // Más predicciones...
    ]
  }
}
```

## Códigos de Error

| Código | Descripción                       |
| ------ | --------------------------------- |
| 400    | Parámetros de solicitud inválidos |
| 401    | No autenticado                    |
| 403    | No autorizado                     |
| 404    | Recurso no encontrado             |
| 429    | Límite de velocidad excedido      |
| 500    | Error interno del servidor        |

Para más ejemplos y casos de uso específicos, consulta la [sección de ejemplos](ejemplos).
