#include <NTPClient.h>
#include <WiFiUdp.h>

WiFiUDP ntpUDP;               // Cliente NTP
NTPClient timeClient(ntpUDP); //  para obtener tiempo actual

const int GMT = -5;           // Zona horaria en la que se encuentra
uint8_t fechaHora[7] = {};

void conexionNTP() {
  timeClient.begin();                   // Inicializa el clinte NTP para obtener el tiempo
  timeClient.setTimeOffset(GMT * 3600); // Configura la zona horaria
}

String obtenerFechaHora() {
  while (!timeClient.update()) {    // Actualiza la fecha y  hora
    timeClient.forceUpdate();       //  a la actual
  }
  return timeClient.getFormattedDate();
}
