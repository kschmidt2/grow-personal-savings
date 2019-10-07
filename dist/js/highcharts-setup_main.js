let subhead=document.getElementsByClassName("chart-subhead"),headline=document.getElementById("chart-head");if(!headline)for(var i=0;i<subhead.length;i++)subhead[i].style.fontWeight="600";Highcharts.setOptions({lang:{thousandsSep:","}}),document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){Highcharts.chart("chart-container",{chart:{type:"bar",styledMode:!0,spacingBottom:25,spacingRight:100},title:{text:null},data:{googleSpreadsheetKey:"1YOKb5l2VM4aAB2r20N_1aT_1vEajYrP3U-U3A6lZbC0"},plotOptions:{series:{groupPadding:.1}},legend:{align:"right",symbolRadius:0,verticalAlign:"top",x:10,itemMarginTop:-10},xAxis:{labels:{style:{whiteSpace:"nowrap"}},tickLength:5},yAxis:{title:!1,labels:{useHTML:!0,overflow:"allow"}},credits:{enabled:!1},tooltip:{shadow:!1,padding:10},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{chart:{spacingRight:10},legend:{align:"left",x:-18},tooltip:{enabled:!1}}}]}})})},1e3);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic3ViaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhlYWRsaW5lIiwiZ2V0RWxlbWVudEJ5SWQiLCJpIiwibGVuZ3RoIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiSGlnaGNoYXJ0cyIsInNldE9wdGlvbnMiLCJsYW5nIiwidGhvdXNhbmRzU2VwIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNldFRpbWVvdXQiLCJjaGFydCIsInR5cGUiLCJzdHlsZWRNb2RlIiwic3BhY2luZ0JvdHRvbSIsInNwYWNpbmdSaWdodCIsInRpdGxlIiwidGV4dCIsImRhdGEiLCJnb29nbGVTcHJlYWRzaGVldEtleSIsInBsb3RPcHRpb25zIiwic2VyaWVzIiwiZ3JvdXBQYWRkaW5nIiwibGVnZW5kIiwiYWxpZ24iLCJzeW1ib2xSYWRpdXMiLCJ2ZXJ0aWNhbEFsaWduIiwieCIsIml0ZW1NYXJnaW5Ub3AiLCJ4QXhpcyIsImxhYmVscyIsIndoaXRlU3BhY2UiLCJ0aWNrTGVuZ3RoIiwieUF4aXMiLCJ1c2VIVE1MIiwib3ZlcmZsb3ciLCJjcmVkaXRzIiwiZW5hYmxlZCIsInRvb2x0aXAiLCJzaGFkb3ciLCJwYWRkaW5nIiwicmVzcG9uc2l2ZSIsInJ1bGVzIiwiY29uZGl0aW9uIiwibWF4V2lkdGgiLCJjaGFydE9wdGlvbnMiXSwibWFwcGluZ3MiOiJBQVFBLElBQUFBLFFBQUFDLFNBQUFDLHVCQUFBLGlCQUNBQyxTQUFBRixTQUFBRyxlQUFBLGNBQ0EsSUFBQUQsU0FDQSxJQUFBLElBQUFFLEVBQUEsRUFBQUEsRUFBQUwsUUFBQU0sT0FBQUQsSUFDQUwsUUFBQUssR0FBQUUsTUFBQUMsV0FBQSxNQUlBQyxXQUFBQyxXQUFBLENBQ0FDLEtBQUEsQ0FDQUMsYUFBQSxPQUlBWCxTQUFBWSxpQkFBQSxtQkFBQSxXQUNBQyxXQUFBLFdBQ0FMLFdBQUFNLE1BQUEsa0JBQUEsQ0FDQUEsTUFBQSxDQUNBQyxLQUFBLE1BQ0FDLFlBQUEsRUFDQUMsY0FBQSxHQUNBQyxhQUFBLEtBRUFDLE1BQUEsQ0FDQUMsS0FBQSxNQUVBQyxLQUFBLENBQ0FDLHFCQUFBLGdEQUdBQyxZQUFBLENBQ0FDLE9BQUEsQ0FDQUMsYUFBQSxLQW9CQUMsT0FBQSxDQUNBQyxNQUFBLFFBQ0FDLGFBQUEsRUFDQUMsY0FBQSxNQUNBQyxFQUFBLEdBQ0FDLGVBQUEsSUFFQUMsTUFBQSxDQUNBQyxPQUFBLENBQ0EzQixNQUFBLENBQ0E0QixXQUFBLFdBR0FDLFdBQUEsR0FFQUMsTUFBQSxDQUNBakIsT0FBQSxFQUNBYyxPQUFBLENBQ0FJLFNBQUEsRUFDQUMsU0FBQSxVQUdBQyxRQUFBLENBQ0FDLFNBQUEsR0FFQUMsUUFBQSxDQUNBQyxRQUFBLEVBQ0FDLFFBQUEsSUFFQUMsV0FBQSxDQUNBQyxNQUFBLENBQUEsQ0FDQUMsVUFBQSxDQUNBQyxTQUFBLEtBRUFDLGFBQUEsQ0FDQWxDLE1BQUEsQ0FDQUksYUFBQSxJQUVBUSxPQUFBLENBQ0FDLE1BQUEsT0FDQUcsR0FBQSxJQUVBVyxRQUFBLENBQ0FELFNBQUEsWUFPQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWRkcyBzb2NpYWwgY2xhc3MgdG8gZ2V0IHNvY2lhbCBjaGFydFxuLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtYXJlYVwiKTtcbi8vIGZvcih2YXIgaSA9IDA7IGkgPCBlbGVtZW50Lmxlbmd0aDsgaSsrKVxuLy8ge1xuLy8gICAgIGVsZW1lbnRbaV0uY2xhc3NOYW1lICs9IFwiIHNvY2lhbFwiO1xuLy8gfVxuXG4vLyBib2xkcyB0aGUgc3ViaGVhZCBpZiB0aGVyZSBpcyBubyBoZWFkbGluZVxubGV0IHN1YmhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2hhcnQtc3ViaGVhZFwiKSxcbiAgICBoZWFkbGluZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnQtaGVhZFwiKTtcbiAgICBpZiAoIWhlYWRsaW5lKSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBzdWJoZWFkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzdWJoZWFkW2ldLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjYwMFwiO1xuICAgICAgICB9ICAgICAgIFxuICAgICB9XG5cbkhpZ2hjaGFydHMuc2V0T3B0aW9ucyh7XG4gICAgbGFuZzoge1xuICAgICAgdGhvdXNhbmRzU2VwOiAnLCdcbiAgICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBteUNoYXJ0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICBIaWdoY2hhcnRzLmNoYXJ0KCdjaGFydC1jb250YWluZXInLCB7XG4gICAgICAgICAgICBjaGFydDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdiYXInLFxuICAgICAgICAgICAgICAgIHN0eWxlZE1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3BhY2luZ0JvdHRvbTogMjUsXG4gICAgICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMDBcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBudWxsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGdvb2dsZVNwcmVhZHNoZWV0S2V5OiAnMVlPS2I1bDJWTTRhQUIycjIwTl8xYVRfMXZFYWpZclAzVS1VM0E2bFpiQzAnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gZm9yIGJhciBjaGFydHMgb25seVxuICAgICAgICAgICAgcGxvdE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBzZXJpZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBQYWRkaW5nOiAwLjFcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIGZvciBsaW5lIGNoYXJ0cyBvbmx5XG4gICAgICAgICAgICAvLyBwbG90T3B0aW9uczoge1xuICAgICAgICAgICAgLy8gICAgIHNlcmllczoge1xuICAgICAgICAgICAgLy8gICAgICAgICBsaW5lV2lkdGg6IDEsXG4gICAgICAgICAgICAvLyAgICAgICAgIC8vIGNsaXA6IGZhbHNlLFxuICAgICAgICAgICAgLy8gICAgICAgICBtYXJrZXI6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3ltYm9sOiAnY2lyY2xlJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGZpbGxDb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgc3RhdGVzOiB7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmlsbENvbG9yOiAnI2ZmZmZmZidcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAgICAgICAgIH1cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgc3ltYm9sUmFkaXVzOiAwLFxuICAgICAgICAgICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICAgICAgICAgIHg6IDEwLFxuICAgICAgICAgICAgICAgIGl0ZW1NYXJnaW5Ub3A6IC0xMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHhBeGlzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aWNrTGVuZ3RoOiA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeUF4aXM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICAgICAgICAgIHVzZUhUTUw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnYWxsb3cnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWRpdHM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvb2x0aXA6IHtcbiAgICAgICAgICAgICAgICBzaGFkb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzcG9uc2l2ZToge1xuICAgICAgICAgICAgICAgIHJ1bGVzOiBbe1xuICAgICAgICAgICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogNTAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjaGFydE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcnQ6IHtcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZ1JpZ2h0OiAxMFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsZWdlbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiAtMThcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0sIDEwMDApOyJdfQ==
