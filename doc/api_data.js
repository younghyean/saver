define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_rlack_Desktop_SOPT_Saver____code_doc_main_js",
    "groupTitle": "C__Users_rlack_Desktop_SOPT_Saver____code_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/brandlist",
    "title": "",
    "name": "______________",
    "group": "brand_all_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "brand_num",
            "description": "<p>브랜드 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "count",
            "description": "<p>댓글수</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n    \"result\": [\n        {\n            \"brand_num\": 3,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"가방사요\",\n            \"kind\": \"가방\",\n            \"product\": \"프라다\",\n            \"price\": \"11만원\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 0\n        },\n        {\n            \"brand_num\": 2,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"가방사요!!\",\n            \"kind\": \"가방\",\n            \"product\": \"프라다7\",\n            \"price\": \"28만원\",\n            \"period\": \"2017-07-03\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 1\n        },\n        {\n            \"brand_num\": 1,\n            \"id\": \"kcj\",\n            \"title\": \"가방사요요!!\",\n            \"kind\": \"가방\",\n            \"product\": \"루이까또즈7\",\n            \"price\": \"32만원\",\n            \"period\": \"2017-07-02\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "brand_all_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/brandseller/:brand_comment_num",
    "title": "",
    "name": "____________",
    "group": "brandlist_detail_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "brand_comment_num",
            "description": "<p>브랜드 댓글 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "method",
            "description": "<p>방법</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n     \"elec_comment_num\" : \"1\",\n     \"id\" : \"rlackswnd123\",\n     \"title\" : \"가방 팔아요\",\n     \"kind\" : \"가방\",\n     \"product\" : \"프라다\",\n     \"price\" : \"5만원\" ,\n     \"period\": \"2017-07-02\"\n     \"addinformation\" : \"없음\",\n     \"method\" : \"직거래\"\n     \"profileimage\" : \"null\"\n     \"local\" : \"경기\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "brandlist_detail_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/brandlist/:brand_num",
    "title": "",
    "name": "_____________",
    "group": "brandlist_particular_posting",
    "header": {
      "fields": {
        "info 브랜드 특정 게시글 객체": [
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "int",
            "optional": false,
            "field": "brand_num",
            "description": "<p>브랜드 기본키</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>구매자 아이디</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "explantion",
            "description": "<p>덧붙일말</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "count",
            "description": "<p>댓글 수</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          },
          {
            "group": "info 브랜드 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          }
        ],
        "comment 게시글에 달린 답글 객체 배열": [
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "int",
            "optional": false,
            "field": "sellertid",
            "description": "<p>판매자 id</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "method",
            "description": "<p>구매방법</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "info-Response-mesaage",
          "content": "\"info\": {\n            \"brand_num\": 1,\n            \"id\": \"aa\",\n            \"title\": \"프라다\",\n            \"kind\": \"지갑\",\n            \"product\": \"지갑\",\n            \"price\": \"53만원\",\n            \"period\": \"2017-07-07\",\n            \"time\": \"1312\",\n            \"explantion\": null,\n            \"addinformation\": null,\n            \"count\": 1,\n            \"image\": \"www.naver.com\",\n            \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\"\n        }",
          "type": "json"
        },
        {
          "title": "comment-Response-mesaage",
          "content": "\"comment\": [\n           {\n               \"title\": \"브랜드사요\",\n               \"price\": \"22만\",\n               \"sellerid\": \"aa\",\n               \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\",\n               \"local\": \"부산\",\n               \"method\": \"직거래\",\n               \"period\": \"0000-00-00\"\n           }\n       ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>{ &quot;message&quot; : &quot;ok&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response",
            "description": "<p>Error-Response { &quot;message&quot;: &quot;selecting posts error : [에러원인]&quot;, &quot;result&quot;[] }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "brandlist_particular_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/brandsearch/:brandsearch",
    "title": "",
    "name": "______________",
    "group": "brandsearch",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "brand_num",
            "description": "<p>브랜드 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>답글 수</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n       \"result\": [\n        {\n            \"category\": \"브랜드\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:58:30 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187509968.jpg\"\n        },\n        {\n            \"category\": \"브랜드\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:56:21 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187381394.jpg\"\n        },\n        {\n            \"category\": \"브랜드\",\n            \"id\": \"aa\",\n            \"title\": \"aaaaaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 3:29:47 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499182186482.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "brandsearch"
  },
  {
    "type": "post",
    "url": "/52.79.142.230:3000/buying/:user_num",
    "title": "",
    "name": "_________",
    "group": "buy_ask",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가사항</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "explantion",
            "description": "<p>요구사항</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "url",
            "description": "<p>구매 url주소</p>"
          },
          {
            "group": "message-structure",
            "type": "file",
            "optional": false,
            "field": "image",
            "description": "<p>이미지</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-mesaage",
          "content": "{\n     \"title\" : \"제목\",\n     \"category\" : \"전자제품\",\n     \"product\" : \"핸드폰\",\n     \"price\" : \"22만원\",\n     \"explantion\" : \"요구사항\",\n     \"time\" : \"12:59:20\" ,\n     \"addinformation\" : \"추가사항\",\n     \"kind\" : \"아이폰\"\n     \"period\" : \"2017-07-05\"\n     \"url\" : \"www.naver.com\"\n     \"image\" : \"https://kimyoung.s3.ap-northeast-2.amazonaws.com/1496198540016.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"inserting comment error : [에러원인]\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "buy_ask"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/eleclist",
    "title": "",
    "name": "______________",
    "group": "eleclist_all_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "elec_num",
            "description": "<p>전자제품 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "count",
            "description": "<p>댓글수</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n    \"result\": [\n        {\n            \"elec_num\": 3,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"아이폰사요\",\n            \"kind\": \"핸드폰\",\n            \"product\": \"아이폰2\",\n            \"price\": \"11만원\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 0\n        },\n        {\n            \"elec_num\": 2,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"아이폰사요!!\",\n            \"kind\": \"핸드폰\",\n            \"product\": \"아이폰7\",\n            \"price\": \"28만원\",\n            \"period\": \"2017-07-03\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 1\n        },\n        {\n            \"elec_num\": 1,\n            \"id\": \"kcj\",\n            \"title\": \"아이폰사요요!!\",\n            \"kind\": \"핸드폰\",\n            \"product\": \"아이폰7\",\n            \"price\": \"32만원\",\n            \"period\": \"2017-07-02\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "eleclist_all_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/elecseller/:elec_comment_num",
    "title": "",
    "name": "_____________",
    "group": "eleclist_detail_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "elec_comment_num",
            "description": "<p>전자제품 댓글 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "method",
            "description": "<p>방법</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n     \"elec_comment_num\" : \"1\",\n     \"id\" : \"rlackswnd123\",\n     \"title\" : \"아이폰 팔아요\",\n     \"kind\" : \"핸드폰\",\n     \"product\" : \"아이폰\",\n     \"price\" : \"5만원\" ,\n     \"period\": \"2017-07-02\"\n     \"addinformation\" : \"없음\",\n     \"method\" : \"직거래\"\n     \"profileimage\" : \"null\"\n     \"local\" : \"경기\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "eleclist_detail_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/eleclist/:elec_num",
    "title": "",
    "name": "______________",
    "group": "eleclist_particular_posting",
    "header": {
      "fields": {
        "info 전자제품 특정 게시글 객체": [
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "int",
            "optional": false,
            "field": "elec_num",
            "description": "<p>전자제품 기본키</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>구매자 아이디</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "explantion",
            "description": "<p>덧붙일말</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "count",
            "description": "<p>댓글 수</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          },
          {
            "group": "info 전자제품 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          }
        ],
        "comment 게시글에 달린 답글 객체 배열": [
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "int",
            "optional": false,
            "field": "sellertid",
            "description": "<p>판매자 id</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "method",
            "description": "<p>구매방법</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "info-Response-mesaage",
          "content": "\"info\": {\n    \"elec_num\": 1,\n    \"id\": \"aa\",\n    \"title\": \"아이폰사요요!!\",\n    \"kind\": \"노트북\",\n    \"product\": \"아이폰7\",\n    \"price\": \"32만원\",\n    \"period\": \"2017-07-03\",\n    \"time\": \"12:59:20\",\n    \"explantion\": \"없음\",\n    \"addinformation\": \"없음\",\n    \"count\": 1,\n    \"image\": \"https://kimyoung.s3.ap-northeast-2.amazonaws.com/1496198540016.jpg\",\n    \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\"\n}",
          "type": "json"
        },
        {
          "title": "comment-Response-mesaage",
          "content": "\"comment\": [\n            {\n                \"title\": \"아이폰!!\",\n                \"price\": \"22만원\",\n                \"sellerid\": \"bb\",\n                \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\",\n                \"local\": \"부산\",\n                \"method\": \"직거래\",\n                \"period\": \"0000-00-00\"\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>{ &quot;message&quot; : &quot;ok&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response",
            "description": "<p>Error-Response { &quot;message&quot;: &quot;selecting posts error : [에러원인]&quot;, &quot;result&quot;[] }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "eleclist_particular_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/elecsearch/:elecsearch",
    "title": "",
    "name": "_______________",
    "group": "elecsearch",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "elec_num",
            "description": "<p>전자제품 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>답글 수</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n\"result\": [\n        {\n            \"category\": \"전자제품\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:58:30 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187509968.jpg\"\n        },\n        {\n            \"category\": \"전자제품\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:56:21 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187381394.jpg\"\n        },\n        {\n            \"category\": \"전자제품\",\n            \"id\": \"aa\",\n            \"title\": \"aaaaaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 3:29:47 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499182186482.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "elecsearch"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/etclist",
    "title": "",
    "name": "____________",
    "group": "etc_all_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "etc_num",
            "description": "<p>기타 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "count",
            "description": "<p>댓글수</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n    \"result\": [\n        {\n            \"etc_num\": 3,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"반팔사요\",\n            \"kind\": \"옷\",\n            \"product\": \"반팔\",\n            \"price\": \"11만원\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 0\n        },\n        {\n            \"elec_num\": 2,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"긴팔사요!!\",\n            \"kind\": \"옷\",\n            \"product\": \"긴팔\",\n            \"price\": \"28만원\",\n            \"period\": \"2017-07-03\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 1\n        },\n        {\n            \"elec_num\": 1,\n            \"id\": \"kcj\",\n            \"title\": \"츄리링사요요!!\",\n            \"kind\": \"옷\",\n            \"product\": \"아디다스\",\n            \"price\": \"32만원\",\n            \"period\": \"2017-07-02\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "etc_all_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/etcseller/:etc_comment_num",
    "title": "",
    "name": "___________",
    "group": "etclist_detail_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "etc_comment_num",
            "description": "<p>기타 댓글 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "method",
            "description": "<p>방법</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n     \"etc_comment_num\" : \"1\",\n     \"id\" : \"rlackswnd123\",\n     \"title\" : \"옷 팔아요\",\n     \"kind\" : \"옷\",\n     \"product\" : \"반팔\",\n     \"price\" : \"5만원\" ,\n     \"period\": \"2017-07-02\"\n     \"addinformation\" : \"없음\",\n     \"method\" : \"직거래\"\n     \"profileimage\" : \"null\"\n     \"local\" : \"경기\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "etclist_detail_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/etclist/:etc_num",
    "title": "",
    "name": "____________",
    "group": "etclist_particular_posting",
    "header": {
      "fields": {
        "info 기타 특정 게시글 객체": [
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "int",
            "optional": false,
            "field": "etc_num",
            "description": "<p>기타 기본키</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>구매자 아이디</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "explantion",
            "description": "<p>덧붙일말</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "count",
            "description": "<p>댓글 수</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          },
          {
            "group": "info 기타 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          }
        ],
        "comment 게시글에 달린 답글 객체 배열": [
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "int",
            "optional": false,
            "field": "sellertid",
            "description": "<p>판매자 id</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "method",
            "description": "<p>구매방법</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "info-Response-mesaage",
          "content": "\"info\": {\n           \"etc_num\": 1,\n           \"id\": \"aa\",\n           \"title\": \"기타\",\n           \"kind\": \"기타\",\n           \"product\": \"기타\",\n           \"price\": \"52만원\",\n           \"period\": \"2017-07-03\",\n           \"time\": \"1513\",\n           \"explantion\": null,\n           \"addinformation\": null,\n           \"count\": 2,\n           \"image\": \"www.naver.com\",\n           \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\"\n       }",
          "type": "json"
        },
        {
          "title": "comment-Response-mesaage",
          "content": "\"comment\": [\n            {\n                \"title\": \"asd\",\n                \"price\": \"123\",\n                \"sellerid\": \"bb\",\n                \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\",\n                \"local\": \"asd\",\n                \"method\": \"asd\",\n                \"period\": \"0000-00-00\"\n            },\n            {\n                \"title\": \"기타\",\n                \"price\": \"10만원\",\n                \"sellerid\": \"aa\",\n                \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\",\n                \"local\": \"서울\",\n                \"method\": \"직거래\",\n                \"period\": \"0000-00-00\"\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "Success-Response",
            "description": "<p>{ &quot;message&quot; : &quot;ok&quot; }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "json",
            "optional": false,
            "field": "Error-Response",
            "description": "<p>Error-Response { &quot;message&quot;: &quot;selecting posts error : [에러원인]&quot;, &quot;result&quot;[] }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "etclist_particular_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/etcsearch/:etcsearch",
    "title": "",
    "name": "_____________",
    "group": "etcsearch",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "etc_num",
            "description": "<p>기타 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>답글 수</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n\"result\": [\n        {\n            \"category\": \"기타\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:58:30 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187509968.jpg\"\n        },\n        {\n            \"category\": \"기타\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:56:21 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187381394.jpg\"\n        },\n        {\n            \"category\": \"기타\",\n            \"id\": \"aa\",\n            \"title\": \"aaaaaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 3:29:47 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499182186482.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "etcsearch"
  },
  {
    "type": "post",
    "url": "/52.79.142.230:3000/login",
    "title": "",
    "name": "___",
    "group": "login",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Requset-mesaage",
          "content": "{\n \"id\" : \"123\",\n \"password\" : \"123\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "\"result\": {\n        \"user_num\": 15,\n        \"id\": \"123\",\n        \"password\": \"123\",\n        \"password2\": \"123\",\n        \"name\": \"123\",\n        \"phone\": \"123\",\n        \"bankname\": \"123\",\n        \"account\": \"123\",\n        \"birth\": \"123\",\n        \"local\": null,\n        \"method\": null,\n        \"card\": null,\n        \"visa\": null,\n        \"wireless\": null,\n        \"calling\": null,\n        \"point\": null,\n        \"profileimage\": null\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "server_Error-Response\n{\n\"message\": \"inserting comment error : [에러원인]\"\n}\nPassword_Error-Response\n{\n\"message\": \"비밀번호가 틀렸습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "login"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/mainpage",
    "title": "",
    "name": "mainpage_________",
    "group": "mainpage",
    "header": {
      "fields": {
        "이용자수 객체": [
          {
            "group": "이용자수 객체",
            "type": "int",
            "optional": false,
            "field": "usercount",
            "description": "<p>활동중인 회원수</p>"
          }
        ],
        "informationCount = 총 의뢰한 정보수": [
          {
            "group": "informationCount = 총 의뢰한 정보수",
            "type": "int",
            "optional": false,
            "field": "smart",
            "description": "<p>스마트이용자 객체_의뢰한 정보수</p>"
          },
          {
            "group": "informationCount = 총 의뢰한 정보수",
            "type": "int",
            "optional": false,
            "field": "brand",
            "description": "<p>브랜드이용자 객체_의뢰한 정보수</p>"
          },
          {
            "group": "informationCount = 총 의뢰한 정보수",
            "type": "int",
            "optional": false,
            "field": "etc",
            "description": "<p>기타이용자 객체_의뢰한 정보수</p>"
          },
          {
            "group": "informationCount = 총 의뢰한 정보수",
            "type": "int",
            "optional": false,
            "field": "utilize",
            "description": "<p>유틸리티 객체_의뢰한 정보수</p>"
          },
          {
            "group": "informationCount = 총 의뢰한 정보수",
            "type": "int",
            "optional": false,
            "field": "electronics",
            "description": "<p>전자제품 객체_의뢰한 정보수</p>"
          }
        ],
        "allcommentCount = 총 답글 수": [
          {
            "group": "allcommentCount = 총 답글 수",
            "type": "int",
            "optional": false,
            "field": "smart_comment",
            "description": "<p>스마트이용자 객체_총 답글 수</p>"
          },
          {
            "group": "allcommentCount = 총 답글 수",
            "type": "int",
            "optional": false,
            "field": "brand_comment",
            "description": "<p>브랜드이용자 객체_총 답글 수</p>"
          },
          {
            "group": "allcommentCount = 총 답글 수",
            "type": "int",
            "optional": false,
            "field": "etc_comment",
            "description": "<p>기타이용자 객체_총 답글 수</p>"
          },
          {
            "group": "allcommentCount = 총 답글 수",
            "type": "int",
            "optional": false,
            "field": "utilize_comment",
            "description": "<p>유틸리티이용자 객체_총 답글 수</p>"
          },
          {
            "group": "allcommentCount = 총 답글 수",
            "type": "int",
            "optional": false,
            "field": "electronics_comment",
            "description": "<p>전자제품이용자 객체_총 답글 수</p>"
          }
        ],
        "magam1": [
          {
            "group": "magam1",
            "type": "int",
            "optional": false,
            "field": "electronics",
            "description": "<p>전자제품이용자 객체_총 답글 수</p>"
          }
        ],
        "magam2": [
          {
            "group": "magam2",
            "type": "int",
            "optional": false,
            "field": "utilize",
            "description": "<p>유틸리티이용자 객체_총 답글 수</p>"
          }
        ],
        "magam3": [
          {
            "group": "magam3",
            "type": "int",
            "optional": false,
            "field": "brand",
            "description": "<p>브랜드이용자 객체_총 답글 수</p>"
          }
        ],
        "magam4": [
          {
            "group": "magam4",
            "type": "int",
            "optional": false,
            "field": "smart",
            "description": "<p>스마트이용자 객체_총 답글 수</p>"
          }
        ],
        "magam5": [
          {
            "group": "magam5",
            "type": "int",
            "optional": false,
            "field": "etc",
            "description": "<p>기타이용자 객체_총 답글 수</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "(magam1) {int} :",
          "content": "{elec_num : varchar : 전자제품 넘버\nperiod : varchar : 기간\nkind : varchar : 품종\nproduct: varchar : 상품명\nprice: varchar : 가격\n}",
          "type": "json"
        },
        {
          "title": "(magam2) {int} :",
          "content": "{util_num : varchar : 유틸리티 넘버\nperiod : varchar : 기간\nkind : varchar : 품종\nproduct: varchar : 상품명\nprice: varchar : 가격\n}",
          "type": "json"
        },
        {
          "title": "(magam3) {int} :",
          "content": "{brand_num : varchar : 브랜드 넘버\nperiod : varchar : 기간\nkind : varchar : 품종\nproduct: varchar : 상품명\nprice: varchar : 가격\n}",
          "type": "json"
        },
        {
          "title": "(magam4) {int} :",
          "content": "{smart_num : varchar : 스마트제품 넘버\nperiod : varchar : 기간\nkind : varchar : 품종\nproduct: varchar : 상품명\nprice: varchar : 가격\n}",
          "type": "json"
        },
        {
          "title": "(magam5) {int} :",
          "content": "{etc_num : varchar : 기타 넘버\nperiod : varchar : 기간\nkind : varchar : 품종\nproduct: varchar : 상품명\nprice: varchar : 가격\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n\"result\": {\n       \"usercount\": [\n           {\n               \"usercount\": 2\n           }\n       ],\n       \"informationCount\": [\n           {\n               \"informationCount\": 17\n           }\n       ],\n       \"allcommentCount\": [\n           {\n               \"allcommentCount\": 16\n           }\n       ],\n       \"magam1\": [\n           {\n               \"period\": \"2017-07-03\",\n               \"kind\": \"핸드폰\",\n               \"product\": \"아이폰7\",\n               \"price\": \"32만원\"\n           },\n           {\n               \"period\": \"2017-07-04\",\n               \"kind\": \"핸드폰\",\n               \"product\": \"아이폰2\",\n               \"price\": \"11만원\"\n           }\n       ],\n       \"magam2\": [\n           {\n               \"period\": \"2017-07-05\",\n               \"kind\": \"지갑\",\n               \"product\": \"지갑\",\n               \"price\": \"11만원\"\n           },\n           {\n               \"period\": \"2017-07-06\",\n               \"kind\": \"가방\",\n               \"product\": \"가방\",\n               \"price\": \"24만원\"\n           }\n       ],\n       \"magam3\": [],\n       \"magam4\": [],\n       \"magam5\": []\n   },}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "mainpage"
  },
  {
    "type": "get",
    "url": "52.79.142.230:3000/mydealcomment/:user_num",
    "title": "",
    "name": "_____________",
    "group": "mydealcomment",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "num",
            "description": "<p>기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "count",
            "description": "<p>댓글 수</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "\"result\": [\n     {\n         \"num\": 1,\n         \"id\": \"aa\",\n         \"category\": \"전자제품\",\n         \"title\": \"아이폰사요요!!\",\n         \"kind\": \"노트북\",\n         \"product\": \"아이폰7\",\n         \"price\": \"32만원\",\n         \"period\": \"2017-07-03\",\n         \"time\": \"12:59:20\",\n         \"image\": \"https://kimyoung.s3.ap-northeast-2.amazonaws.com/1496198540016.jpg\",\n         \"count\": 1\n     },\n     {\n         \"num\": 1,\n         \"id\": \"aa\",\n         \"category\": \"기타\",\n         \"title\": \"기타\",\n         \"kind\": \"기타\",\n         \"product\": \"기타\",\n         \"price\": \"52만원\",\n         \"period\": \"2017-07-03\",\n         \"time\": \"1513\",\n         \"image\": \"www.naver.com\",\n         \"count\": 1\n     },\n     {\n         \"num\": 1,\n         \"id\": \"aa\",\n         \"title\": \"스마폰사요\",\n         \"kind\": \"스마트\",\n         \"product\": \"자동차\",\n         \"price\": \"12만원\",\n         \"period\": \"2017-07-07\",\n         \"time\": \"07-03, 2:26:38 pm\",\n         \"image\": null,\n         \"count\": 1\n     },\n     {\n         \"num\": 2,\n         \"id\": \"bb\",\n         \"category\": \"이용권\",\n         \"title\": \"이용권\",\n         \"kind\": \"이용권\",\n         \"product\": \"이용권\",\n         \"price\": \"22만원\",\n         \"period\": \"2017-07-05\",\n         \"time\": \"1222\",\n         \"image\": \"https://kimyoung.s3.ap-northeast-2.amazonaws.com/1496198540016.jpg\",\n         \"count\": 1\n     }\n ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "mydealcomment"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/mypage/:user_num",
    "title": "",
    "name": "________",
    "group": "mypage",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "name",
            "description": "<p>이름</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "point",
            "description": "<p>현재 포인트</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "\"result\": [\n    {\n        \"id\": \"rlackswnd123\",\n        \"name\": \"김찬중\",\n        \"profileimage\": null,\n        \"point\": null\n    }\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "mypage"
  },
  {
    "type": "post",
    "url": "/52.79.142.230:3000/register",
    "title": "",
    "name": "____",
    "group": "register",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>비밀번호 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "password2",
            "description": "<p>비밀번호 확인 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>이름 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "birth",
            "description": "<p>생년월일 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "phone",
            "description": "<p>핸드폰 번호 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "bankname",
            "description": "<p>은행명 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "account",
            "description": "<p>계좌번호 not null</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "method",
            "description": "<p>선호방법</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "card",
            "description": "<p>사용카드</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "visa",
            "description": "<p>visa카드 유무</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "wireless",
            "description": "<p>통신사</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "calling",
            "description": "<p>사용중인 요금제</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Requset-mesaage",
          "content": "{\n \"id\" : \"ankim2son@naver.com\",\n \"password\" : \"1234\",\n \"password2\" : \"1234\",\n \"name\" : \"김용현\",\n \"birth\" : \"930509\",\n \"phone\" : \"1234\" ,\n \"bankname\" : \"국민\" ,\n \"account\" : \"234392342\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n   \"message\" : \"ok\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "server_Error-Response\n{\n\"message\": \"inserting comment error : [에러원인]\"\n}\nrequest_Error-Response\n{\n\"message\": \"please input both of writer and user.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "register"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/search/:search",
    "title": "",
    "name": "_____________",
    "group": "search",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "smart_num",
            "description": "<p>스마트 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "elec_num",
            "description": "<p>전자제품 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "etc_num",
            "description": "<p>기타 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "util_num",
            "description": "<p>유틸리티 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "brand_num",
            "description": "<p>브랜드 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>답글 수</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n\"result\": [\n        {\n            \"category\": \"전자제품\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:58:30 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187509968.jpg\"\n        },\n        {\n            \"category\": \"전자제품\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:56:21 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187381394.jpg\"\n        },\n        {\n            \"category\": \"브랜드\",\n            \"id\": \"aa\",\n            \"title\": \"aaaaaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 3:29:47 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499182186482.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "search"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/smartlist",
    "title": "",
    "name": "_____________",
    "group": "smart_all_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "smart_num",
            "description": "<p>스마트 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "count",
            "description": "<p>댓글수</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n    \"result\": [\n        {\n            \"smart_num\": 3,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"자동차사요\",\n            \"kind\": \"자동차\",\n            \"product\": \"sm5\",\n            \"price\": \"11만원\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 0\n        },\n        {\n            \"elec_num\": 2,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"자동차사요!!\",\n            \"kind\": \"자동차\",\n            \"product\": \"sm3\",\n            \"price\": \"28만원\",\n            \"period\": \"2017-07-03\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 1\n        },\n        {\n            \"elec_num\": 1,\n            \"id\": \"kcj\",\n            \"title\": \"자동차사요요!!\",\n            \"kind\": \"자동차\",\n            \"product\": \"sm7\",\n            \"price\": \"32만원\",\n            \"period\": \"2017-07-02\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "smart_all_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/smartlist/:smart_num",
    "title": "",
    "name": "_____________",
    "group": "smart_particular_posting",
    "header": {
      "fields": {
        "info 스마트 특정 게시글 객체": [
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "int",
            "optional": false,
            "field": "smart_num",
            "description": "<p>스마트 기본키</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>구매자 아이디</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "explantion",
            "description": "<p>덧붙일말</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "count",
            "description": "<p>댓글 수</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          },
          {
            "group": "info 스마트 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          }
        ],
        "comment 게시글에 달린 답글 객체 배열": [
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "int",
            "optional": false,
            "field": "sellertid",
            "description": "<p>판매자 id</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "method",
            "description": "<p>구매방법</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "info-Response-mesaage",
          "content": "\"info\": {\n    \"smart_num\": 1,\n    \"id\": \"aa\",\n    \"title\": \"스마폰사요\",\n    \"kind\": \"스마트\",\n    \"product\": \"자동차\",\n    \"price\": \"12만원\",\n    \"period\": \"2017-07-07\",\n    \"time\": \"07-03, 2:26:38 pm\",\n    \"explantion\": \"없음\",\n    \"addinformation\": \"없음\",\n    \"count\": 1,\n    \"image\": null,\n    \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\"\n}",
          "type": "json"
        },
        {
          "title": "comment-Response-mesaage",
          "content": "\"comment\": [\n            {\n                \"title\": \"asd\",\n                \"price\": \"asd\",\n                \"sellerid\": \"aa\",\n                \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\",\n                \"local\": \"asd\",\n                \"method\": \"asd\",\n                \"period\": \"2017-07-07\"\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "smart_particular_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/smartseller/:smart_comment_num",
    "title": "",
    "name": "____________",
    "group": "smartlist_detail_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "smart_comment_num",
            "description": "<p>스마트 댓글 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "method",
            "description": "<p>방법</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n     \"smart_comment_num\" : \"1\",\n     \"id\" : \"rlackswnd123\",\n     \"title\" : \"자동차 팔아요\",\n     \"kind\" : \"자동차\",\n     \"product\" : \"sm3\",\n     \"price\" : \"5만원\" ,\n     \"period\": \"2017-07-02\"\n     \"addinformation\" : \"없음\",\n     \"method\" : \"직거래\"\n     \"profileimage\" : \"null\"\n     \"local\" : \"경기\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "smartlist_detail_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/smartsearch/:smartsearch",
    "title": "",
    "name": "______________",
    "group": "smartsearch",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "smart_num",
            "description": "<p>스마트 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>답글 수</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n\"result\": [\n  {\n     \"category\": \"스마트\",\n     \"id\": \"aa\",\n     \"title\": \"aaa\",\n     \"kind\": \"aaa\",\n     \"product\": \"aaa\",\n     \"price\": \"aaa\",\n     \"period\": \"2017-07-05\",\n     \"time\": \"07-04, 4:58:30 pm\",\n     \"count\": 0,\n     \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187509968.jpg\"\n  },\n  {\n     \"category\": \"스마트\",\n     \"id\": \"aa\",\n     \"title\": \"aaa\",\n     \"kind\": \"aaa\",\n     \"product\": \"aaa\",\n     \"price\": \"aaa\",\n     \"period\": \"2017-07-05\",\n     \"time\": \"07-04, 4:56:21 pm\",\n     \"count\": 0,\n     \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187381394.jpg\"\n  },\n  {\n     \"category\": \"스마트\",\n     \"id\": \"aa\",\n     \"title\": \"aaaaaa\",\n     \"kind\": \"aaa\",\n     \"product\": \"aaa\",\n     \"price\": \"aaa\",\n     \"period\": \"2017-07-05\",\n     \"time\": \"07-04, 3:29:47 pm\",\n     \"count\": 0,\n     \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499182186482.jpg\"\n  }\n]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "smartsearch"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/utilizelist",
    "title": "",
    "name": "_____________",
    "group": "utilize_all_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "util_num",
            "description": "<p>전자제품 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "count",
            "description": "<p>댓글수</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n    \"result\": [\n        {\n            \"util_num\": 3,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"티켓사요\",\n            \"kind\": \"영화티켓\",\n            \"product\": \"sm5\",\n            \"price\": \"11만원\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 0\n        },\n        {\n            \"elec_num\": 2,\n            \"id\": \"rlackswnd123\",\n            \"title\": \"티켓사요!!\",\n            \"kind\": \"백화점\",\n            \"product\": \"sm3\",\n            \"price\": \"28만원\",\n            \"period\": \"2017-07-03\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 1\n        },\n        {\n            \"elec_num\": 1,\n            \"id\": \"kcj\",\n            \"title\": \"숙박권사요\",\n            \"kind\": \"호텔\",\n            \"product\": \"sm7\",\n            \"price\": \"32만원\",\n            \"period\": \"2017-07-02\",\n            \"time\": \"12:59:20\",\n            \"profileimage\": null,\n            \"count\": 2\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "utilize_all_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/utilseller/:util_comment_num",
    "title": "",
    "name": "_____________",
    "group": "utilize_detail_posting",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "util_comment_num",
            "description": "<p>유틸리티 댓글 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "method",
            "description": "<p>방법</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "message-structure",
            "type": "string",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n     \"util_comment_num\" : \"1\",\n     \"id\" : \"rlackswnd123\",\n     \"title\" : \"숙박권 팔아요\",\n     \"kind\" : \"영화티켓\",\n     \"product\" : \"영화티켓\",\n     \"price\" : \"5만원\" ,\n     \"period\": \"2017-07-02\"\n     \"addinformation\" : \"없음\",\n     \"method\" : \"직거래\"\n     \"profileimage\" : \"null\"\n     \"local\" : \"경기\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "utilize_detail_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/utilizelist/:util_num",
    "title": "",
    "name": "utilize__________",
    "group": "utillist_particular_posting",
    "header": {
      "fields": {
        "info utilize 특정 게시글 객체": [
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "int",
            "optional": false,
            "field": "util_num",
            "description": "<p>utilize 기본키</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>구매자 아이디</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "explantion",
            "description": "<p>덧붙일말</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "addinformation",
            "description": "<p>추가정보</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "count",
            "description": "<p>댓글 수</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          },
          {
            "group": "info utilize 특정 게시글 객체",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          }
        ],
        "comment 게시글에 달린 답글 객체 배열": [
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "int",
            "optional": false,
            "field": "sellertid",
            "description": "<p>판매자 id</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "profileimage",
            "description": "<p>프로필 이미지</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "local",
            "description": "<p>지역</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "method",
            "description": "<p>구매방법</p>"
          },
          {
            "group": "comment 게시글에 달린 답글 객체 배열",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "info-Response-mesaage",
          "content": "\"info\": {\n            \"util_num\": 1,\n            \"id\": \"aa\",\n            \"title\": \"이용권\",\n            \"kind\": \"이용권\",\n            \"product\": \"이용권\",\n            \"price\": \"22만원\",\n            \"period\": \"2017-07-03\",\n            \"time\": \"1622\",\n            \"explantion\": null,\n            \"addinformation\": null,\n            \"count\": 0,\n            \"image\": \"https://kimyoung.s3.ap-northeast-2.amazonaws.com/1496198540016.jpg\",\n            \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\"\n        }",
          "type": "json"
        },
        {
          "title": "comment-Response-mesaage",
          "content": "\"comment\": [\n            {\n                \"title\": \"이용권\",\n                \"price\": \"22만원\",\n                \"sellerid\": \"aa\",\n                \"profileimage\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499010704861.png\",\n                \"local\": \"경기\",\n                \"method\": \"직거래\",\n                \"period\": \"2017-07-07\"\n            }\n        ]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "utillist_particular_posting"
  },
  {
    "type": "get",
    "url": "/52.79.142.230:3000/utilsearch/:utilsearch",
    "title": "",
    "name": "______________",
    "group": "utilsearch",
    "header": {
      "fields": {
        "message-structure": [
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "util_num",
            "description": "<p>유틸리티 기본키</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "category",
            "description": "<p>카테고리</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "id",
            "description": "<p>아이디</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "title",
            "description": "<p>제목</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "kind",
            "description": "<p>품종</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "product",
            "description": "<p>상품명</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "price",
            "description": "<p>가격</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "period",
            "description": "<p>기간</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "time",
            "description": "<p>시간</p>"
          },
          {
            "group": "message-structure",
            "type": "int",
            "optional": false,
            "field": "count",
            "description": "<p>답글 수</p>"
          },
          {
            "group": "message-structure",
            "type": "varchar",
            "optional": false,
            "field": "image",
            "description": "<p>상품 이미지</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Response-mesaage",
          "content": "{\n\"result\": [\n        {\n            \"category\": \"이용권\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:58:30 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187509968.jpg\"\n        },\n        {\n            \"category\": \"이용권\",\n            \"id\": \"aa\",\n            \"title\": \"aaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 4:56:21 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499187381394.jpg\"\n        },\n        {\n            \"category\": \"이용권\",\n            \"id\": \"aa\",\n            \"title\": \"aaaaaa\",\n            \"kind\": \"aaa\",\n            \"product\": \"aaa\",\n            \"price\": \"aaa\",\n            \"period\": \"2017-07-05\",\n            \"time\": \"07-04, 3:29:47 pm\",\n            \"count\": 0,\n            \"image\": \"https://soptsaver.s3.ap-northeast-2.amazonaws.com/1499182186482.jpg\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response",
          "content": "{\n  \"message\" : \"ok\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response",
          "content": "Error-Response\n{\n\"message\": \"selecting all posts error : [에러원인]\",\n\"result\"[]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./exe.js",
    "groupTitle": "utilsearch"
  }
] });
