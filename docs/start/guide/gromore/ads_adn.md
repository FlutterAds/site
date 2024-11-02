#  🌐 广告网络配置

:::tip{title="💡 小提示"}

 - 每个平台都需要先申请注册账号并开通API权限，然后才能添加广告网络
 - 所有参数非必填的不要进行填写，否则会导致数据拉取失败
 - Pro 版客户，如有问题随时联系我

:::


本篇将介绍不同 ADN Reporting API参数获取方法，包括优量汇、快手联盟、百青藤、admob、unity、sigmob、mintegral。

## 优量汇

1、权限：添加前请确保您的账号已拥有「优量汇API」权限

2、必填参数：
- 账号名称：用于区分您在该广告网络下的不同账号，平台不做正确性校验
- 报表API权限：打开后，GroMore可拉取API数据，建议打开
- 账户id：对应“ID”，可在优量汇后台获取
- Secret：对应“我的密钥”，可在优量汇后台获取
![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/cb25842b-fa45-4a80-b2e4-1bddad2458bf)
- 广告网络ID：如为自定义ADN接入，需填写


## 快手联盟
1、权限：添加前请确保您的账号已拥有「快手API」权限

2、必填参数：
- 账号名称：用于区分您在该广告网络下的不同账号，平台不做正确性校验
- 报表API权限：打开后，GroMore可拉取API数据，建议打开
- Access Key：线下获取
- Security Key：线下获取
- 广告网络ID：如为自定义ADN接入，需填写

## 百青藤
1、权限：添加前请确保您的账号已拥有「百度API」权限

2、必填参数：
- 账号名称：用于区分您在该广告网络下的不同账号，平台不做正确性校验
- 报表API权限：打开后，GroMore可拉取API数据，建议打开
- Access Key：可在百青藤后台「账号管理-API管理」获取
- 私钥：与“公钥”一同生成
![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/2f271fe7-1a78-4631-9652-d67b19bf5f33)
根据百度提供的文档，可生成DSA的公私钥对:
```
 ① 生成随机参数
 openssl dsaparam -out dsaparam.pem 1024
 ② 生成 DSA 私钥 privkey.pem
 openssl gendsa -out privkey.pem dsaparam.pem
 ③ 生成公钥 pubkey.pem
 openssl dsa -in privkey.pem -pubout -out pubkey.pem
```
注意：新版本的openssl在这里默认生成的公私钥格式为PKCS#8，但是mix平台只支持PKCS#1格式。所以需要将生成的私钥从PKCS#8格式转换成PKCS#1。

```openssl dsa -in privkey.pem -out privkey.pem```

如何识别是PKCS#8还是PKCS#1？
如果以BEGIN DSA PRIVATE KEY开头则表明是PKCS#1格式，而不带DSA算法类型的BEGIN PRIVATE KEY的开头则是PKCS#8。
- 广告网络ID：如为自定义ADN接入，需填写

  
## Admob
1、权限：添加前请确保您的账号已拥有「Admob API」权限

2、必填参数：
- 账号名称：用于区分您在该广告网络下的不同账号，平台不做正确性校验
- 报表API权限：打开后，GroMore可拉取API数据，建议打开
- API Key：可在「Credentials」获取，操作步骤如下
- Client ID & Client Secret：可在「Credentials」获取，操作步骤如下
- Refresh Token：可在「Credentials」获取，操作步骤如下
- 广告网络ID：如为自定义ADN接入，需填写
  
 **API KEY**
  - Step 1：在 [**Google Cloud Console**](url:https://console.cloud.google.com/home) 创建/选择一个项目(project)
  - Step 2：从首页 -> Getting Started -> Enable APIs and get credentials like keys，进入「APIs & Services」
  - Step 3：从Credentials -> CREATE CREDENTIALS -> API key，自动生成一个API key
  - Step 4：后续则可通过「Credentials」找到API Key
<figure>
<img src="https://github.com/DMPlatform/DMPlatform/assets/26924924/27a334f9-1b89-4a95-95cb-b578eb28c3c4" width=450/>
<img src="https://github.com/DMPlatform/DMPlatform/assets/26924924/dce8bef9-77e3-48df-982c-15c92598aea1" width=500/>   
</figure>


**Client ID & Client Secret**
  - Step 1：选中一个项目(project)，从OAuth consent screen进入，填入Product Name
  - Step 2：从Dashboard -> ENABLE APIS AND SERVICES进入，搜索Adsense Manegement API，点击“ENABLE”激活
    ![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/5d2ad7c8-0719-4b3e-8f15-76a4a43468ed)![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/311bddca-6842-4a85-828c-141aebdb276d)
  - Step 3：从Credentials -> CREATE CREDENTIALS -> OAuth client ID进入，选择“Web application”、填入“APP名称“和“Authorized redirect URI”，即可生成Client ID & Client Secret
    ![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/3db818cb-e020-468b-bde9-665d8e3a6119)![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/c469840d-94df-4afb-964b-4d2383bf3db4)


 **Refresh Token**
  - Step 1：进入[OAuth 2.0 Playground](url：https://developers.google.com/oauthplayground/#step1&scopes=https://www.googleapis.com/auth/adwords&url=https://&content_type=application/json&http_method=GET&useDefaultOauthCred=checked&oauthEndpointSelect=Google&oauthAuthEndpointValue=https://accounts.google.com/o/oauth2/auth&oauthTokenEndpointValue=https://www.googleapis.com/oauth2/v3/token&includeCredentials=unchecked&accessTokenType=bearer&autoRefreshToken=unchecked&accessType=offline&forceAprovalPrompt=checked&response_type=code)，点击右上角的设置按钮，将“Force prompt”设置为“NO”，并勾选“Use your own OAuth credentials”，输入Client ID & Client Secret
  - Step 2：在「Select & Authorize APIS」选择'[(https://www.googleapis.com/auth/adsense.readonly)]'，并勾选 “Authorize APIs”
  - Step 3：授予Adsense获取您的Admob账号数据的权限
  - Step 4：点击“Exchange authorization code for tokens”，获取Refresh token

## Unity
1、权限：添加前请确保您的账号已拥有「Unity API」权限

2、必填参数： 
- 账号名称：用于区分您在该广告网络下的不同账号，平台不做正确性校验
- 报表API权限：打开后，GroMore可拉取API数据，建议打开
- Api Key：对应“Monetization Stats APl Access”的值，可在「Ads Data Export-API Access」获取
- Organization Core ID：可在「Settings-Organization info」获取
![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/5dccd8c7-1b4e-475d-a581-e099b9d67b0c)
- 广告网络ID：如为自定义ADN接入，需填写

## Sigmob
1、权限：添加前请确保您的账号已拥有「Sigmob API」权限

2、必填参数：
- 账号名称：用于区分您在该广告网络下的不同账号，平台不做正确性校验
- 报表API权限：打开后，GroMore可拉取API数据，建议打开
- Public Key：可在sigmob后台「账户管理」获取
- Secret Key：可在sigmob后台「账户管理」获取
<img width="585" src="https://github.com/DMPlatform/DMPlatform/assets/101794868/46e45d8c-0a89-4df2-bd66-47a69dbe1de1">

- 用户名：可在「账户管理」获取
<img width="385" src="https://github.com/DMPlatform/DMPlatform/assets/101794868/b2be195c-4712-4240-9a60-da34635be8e7">

- 广告网络ID：如为自定义ADN接入，需填写
  
## Mintegral
1、权限：添加前请确保您的账号已拥有「Mintegral API」权限

2、必填参数：
- 账号名称：用于区分您在该广告网络下的不同账号，平台不做正确性校验
- 报表API权限：打开后，GroMore可拉取API数据，建议打开
- Skey：对应“Skey”，可在「接口工具」获取
- Secret：对应“密钥”，可在「接口工具」获取
  ![image](https://github.com/DMPlatform/DMPlatform/assets/26924924/8a2d05f1-f3e2-46f1-9f66-5f06328e0f50)
- 广告网络ID：如为自定义ADN接入，需填写
