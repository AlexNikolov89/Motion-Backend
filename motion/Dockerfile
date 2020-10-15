FROM continuumio/miniconda:latest

ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

RUN apt-get update && apt-get upgrade -y && apt-get install -qqy \
    wget \
    bzip2 \
    graphviz

RUN mkdir -p /motion_backend

COPY ./motion_backend/requirements.yml /motion_backend/requirements.yml

RUN /opt/conda/bin/conda env create -f /motion_backend/requirements.yml

ENV PATH /opt/conda/envs/docker_motion/bin:$PATH

RUN echo "source activate docker_motion" >~/.bashrc

# create a scripts folder
RUN mkdir -p /scripts
COPY ./scripts /scripts
RUN chmod +x ./scripts*

COPY ./motion_backend /motion_backend

WORKDIR /motion_backend