#include "conexionWiFi.h"
#include "conexionMQTT.h"
#include "FechaHora.h"

String id =  "1";
String user_id = "1";

float latitude = 2.4455532, longitude = -76.598177; // para obtener la latitug y longitud del GPS

unsigned long currentMillis = 0;    // Tiempo de ejecucion actual del programa
unsigned long previousMillis = 0;   // Tiempo de ejecucion en el que se enviaron los ultimos datos

int lectura;        // Valor obtenido del pin
char datos[200];      // Datos para publicar en la red

void setup() {
  Serial.begin(115200); // Puerto serial de alta frecuencia

  conexionWiFi();       // Conexion a la red WiFi
  conexionNTP();        // Conexion a servidor de fceha y hora
  conexionMQTTBroker(); // Conexion a servicio MQTT
  Serial.println("");
}

void loop()
{
  currentMillis = millis();
  if (currentMillis - previousMillis >= 10000) // Se evalua si a pasado 10 s.
  {
    String dataStr = construirJSON(obtenerFechaHora(), "\"data\":\"datos\"", latitude, longitude);
    dataStr.toCharArray(datos, 200);
    publicar(datos);
    previousMillis = currentMillis;
  }
}

String floattostr(float variable, byte tamanio, byte nro_decimales) {
  String valor = "\"NaN\"";
  char valorch[tamanio] = "";
  dtostrf(variable, tamanio, nro_decimales, valorch);
  valor = String(valorch);
  valor.replace(" ", "");
  return valor;
}

String construirJSON(String fechaHora, String data, float latitud, float longitud) {
  
  String datosS = "\"device\":" + id; 
  datosS += ",";
  datosS += "\"user_id\":"+ user_id;
  datosS += ",";
  datosS += "\"fecha\":\""+ fechaHora + "\"";
  datosS += ",";
  datosS += data;
  datosS += ",";
  datosS += "\"latitude\":" + floattostr(latitud,12,7);
  datosS += ",";
  datosS += "\"longitude\":" + floattostr(longitud,12,7);

  return datosS;
}
