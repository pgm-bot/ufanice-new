# Client UFAFlow - Deployment Guide

## ข้อมูล Docker และ Kubernetes

### Service
- **client-ufaflow**: Service สำหรับทั้ง ufaflow.com และ www.ufaflow.com (Port 5004)

### Domains
- `ufaflow.com` → Port 5004
- `www.ufaflow.com` → Port 5004

## การ Build Docker Image

```bash
# Build image
docker build -t client-ufaflow:latest .

# Tag image for GitHub Container Registry
docker tag client-ufaflow:latest ghcr.io/your-org/client-ufaflow:latest

# Push to registry
docker push ghcr.io/your-org/client-ufaflow:latest
```

## การ Deploy ไปยัง Kubernetes

### 1. สร้าง Secret สำหรับ GitHub Registry

```bash
kubectl create secret docker-registry github-registry-secret \
  --docker-server=ghcr.io \
  --docker-username=YOUR_GITHUB_USERNAME \
  --docker-password=YOUR_GITHUB_TOKEN \
  --docker-email=YOUR_EMAIL
```

### 2. Deploy Application

```bash
kubectl apply -f client.yaml
```

### 3. ตรวจสอบ Status

```bash
# ตรวจสอบ Pods
kubectl get pods -l app=client-ufaflow

# ตรวจสอบ Services
kubectl get services | grep client-ufaflow

# ตรวจสอบ Ingress
kubectl get ingress client-ufaflow-ingress

# ดู Logs
kubectl logs -l app=client-ufaflow -f
```

## การอัพเดท Application

```bash
# Build image ใหม่
docker build -t ghcr.io/your-org/client-ufaflow:latest .
docker push ghcr.io/your-org/client-ufaflow:latest

# Restart deployment
kubectl rollout restart deployment/client-ufaflow-deployment

# ตรวจสอบ rollout status
kubectl rollout status deployment/client-ufaflow-deployment
```

## การ Scale Application

```bash
# Scale up
kubectl scale deployment/client-ufaflow-deployment --replicas=3

# Scale down
kubectl scale deployment/client-ufaflow-deployment --replicas=1
```

## Troubleshooting

### ตรวจสอบ Pod ที่มีปัญหา
```bash
kubectl describe pod <pod-name>
kubectl logs <pod-name>
```

### ตรวจสอบ Service
```bash
kubectl describe service client-ufaflow
kubectl get endpoints client-ufaflow
```

### ตรวจสอบ Ingress
```bash
kubectl describe ingress client-ufaflow-ingress
```

## หมายเหตุ

- Application รันที่ port 3000 ภายใน container
- Service expose ที่ port 5004 สำหรับทั้ง ufaflow.com และ www.ufaflow.com
- Ingress จะ route traffic จากทั้งสอง domain ไปยัง service เดียวกัน
- TLS certificate จะถูกสร้างอัตโนมัติโดย cert-manager
