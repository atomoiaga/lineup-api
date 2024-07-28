```
docker build -t lineup-api:1 .
```

dive - can check image contents
hadolint - lints your dockerfile

---

we take only some executables, but not the whole OS, like file management, etc
Q: first image? A:
alpine its a lightweight image

```
FROM node:20-alpine
```

ARG - built time
ENV - run time

ADD - fetch online resources - it is recommended to use COPY & RUN cmds (curl + copy) - doesn't store the
package in image

optimization - this layer is cached
