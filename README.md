# eCommerce

#### the tools we use

- Docker Compose version v2.24.6-desktop.1
- node v20.12.2
- npm v10.5.0
- images 
    - postgresql image: postgres:14
    - pgadmin image: dpage/pgadmin4
    - Django FROM python:3.9

`docker compose up`

> 0.0.0.0:8000 django views
> 0.0.0.0:5050 pgadmin4

##### pgadmin4'e bağlanmak için

0.0.0.0:5050 adresinden belirlenen mail ve şifre girilir
pgadmin4 sayfasından bir server oluşturup postgresql_container id si ile bağlanılır

![x](1.png)

##### 