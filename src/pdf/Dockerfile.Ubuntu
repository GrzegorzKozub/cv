FROM ubuntu:bionic

RUN sed 's/main$/main universe/' -i /etc/apt/sources.list
RUN apt-get update
RUN apt-get upgrade -y

RUN apt-get install -y build-essential xorg libssl-dev libxrender-dev wget gdebi fonts-noto

ARG version=0.12.5
ARG filename=wkhtmltox_${version}-1.bionic_amd64.deb
ARG url=https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/${version}/${filename}

RUN wget ${url}
RUN gdebi --n ${filename}

