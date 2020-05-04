var data = {
    api_key:'ur912507-8258182cfa5e7c2c21902bb9',
    format:'json',
    response_times:'1',//返回响应时间
    response_times_limit:'1',//限制条数
    response_times_average:'1'//返回24h平均响应时间
};
$.ajax({//获取uptimerobot监控的网站状态
    method : 'POST',
    url : 'https://api.uptimerobot.com/v2/getMonitors',
    data : data,
    dataType: "json",
    success:function(data){//成功
        //console.log(data);
        var stravg='<div class="item">';
        if(data.stat=='ok'){//请求返回成功
            for(var i=0;i < data.monitors.length;i++){
                var avgtime=Number(data.monitors[i].average_response_time).toFixed(2)//平均响应时间
                stravg+='<p>'+data.monitors[i].friendly_name+'首页平均响应时间：'+avgtime+'ms</p>';
            }
            stravg+='</div>'
            document.getElementById("avgtime").innerHTML+= stravg;
        }
    },
    error:function(textStatus){console.log("uptimerobot请求失败！");}
});
