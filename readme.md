# Microservices - Docker & Google Kubernetes Engine

Microservices to be deployed on Google Kubernetes Engine


## Releases

This project has 2 releases:
1. Microservices using Load balancers (Release - 0.0.1) \
    https://github.com/mohmad-shoaib/microservices-gke/tree/Release-0.0.1
2. Microservices using Ingress & Configmap (Release - 0.0.2) \
    https://github.com/mohmad-shoaib/microservices-gke/tree/Release-0.0.2


### Simple Multiplication

Flask service is used to multiple 2 numbers. If you want to find the multiple of 2 & 5, Flask Service returns 10. 
- **STEP 1** : Express Service calls the Flask Service for the multiple of 2 & 5. It gets a response back saying 10.
- **STEP 2** : The Currency Conversion Service then returns 10 back. 

http://localhost:3000/multiple/2/5

```json
{
  "number_1": 2,
  "number_2": 5,
  "result": 10
}
```

#### How does express app know the location of flask app?
- You don't want to HARDCODE
- Configure an Environment Variable - `EXPRESS_SERVICE_HOST`
- --env EXPRESS_SERVICE_HOST=http://express-service