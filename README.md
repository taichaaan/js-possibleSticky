# js-possibleSticky


## Description
stickyが可能かどうかを判定するプラグインです。  
stickyは100vhを超えると「is-sticky」が付与されます。  

判定は、要素の高さと「top」の値を画面の高さを比較して判定をしています。  
ただこれだと、要素が一番下につくまで「is-sticky」になってしまうので、  
オプションのgraceで下からの距離を指定して猶予を持たせることができます。


## Class
### hoge
- is-sticky -- sitkcyが可能な時に付与されるクラスです。


## Demo
```
./test/
``` 
test ディレクトリをご確認ください。  
使用する外部プラグインなども同封しています。


## Usage
```JavaScript
new possibleSticky('.c-sticky',{
});
```


## Option
| option | Type | Default | description |
| ---- | ---- | ---- | ---- |
| grace | int | 0 | 下からの距離を指定してください。  その分猶予を持たせることができます。 |
| isStickyEvent | array | ['load','resize'] | stickyを判定するイベントを配列で指定してください。 |
| getWindowSizeEvent | array | ['DOMContentLoaded','resize'] | windowのサイズを取得するイベントを指定して下さい。 |

string,array,function,boolean,int



## Method
| name  | description |
| ---- | ---- |
| remove | 全てのイベントを削除する関数です。 |




## 開発環境

### node
v14.14.0


### gulp
v4.0.2

