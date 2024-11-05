Học triển khai hệ thống theo cấu trúc microservices và tối ưu logic code
                         
<h2 align="center">chạy redis trên ubuntu thông qua Snap package manager</h2>
<p?>1) sudo snap services (xem cái nào đang chạy hay dừng)</p>
<p?>2) sudo snap start redis (chạy redis)</p>
<p?>3) redis.cli (truy cập vào redis)</p>

<h2 align="center">Redis syntax</h2>
<p>4) set key value (gán dữ liệu cho key)</p>
<p>5) get key/value (lấy dữ liệu hoặc key)</p>
<p>6) mget/mset key value (lấy hoặc gán dữ liệu cho nhiều key hoặc value cùng một dòng lệnh)</p>
<p>7) incr key (tăng giá trị cho value của key lên 1, vi du: count = 8, incr count => count = 9)</p>
<p>8) incrby key number (tăng giá trị cho value của key tùy thích)</p>
<p>9) decr key (giảm giá trị cho value của key xuống 1 )</p>
<p>10) decrby key (giảm giá trị cho value của key xuống tùy thích)</p>
<p>11) expire key second (set thời gian hết hạn cho key)</p>
<p>12) ttl key (kiểm tra thời gian tồn tại của key)</p>
<p>13) keys * (hiển thị ra tất cả các key đã set)</p>
