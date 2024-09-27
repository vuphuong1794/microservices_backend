Học triển khai hệ thống theo cấu trúc microservices và tối ưu logic code
                         
                         ---chạy redis trên ubuntu thông qua Snap package manager---
1) sudo snap services (xem cái nào đang chạy hay dừng)
2) sudo snap start redis (chạy redis)
3) redis.cli (truy cập vào redis)

                         ---Redis syntax---
4) set key value (gán dữ liệu cho key)
5) get key/value (lấy dữ liệu hoặc key)
6) mget/mset key value (lấy hoặc gán dữ liệu cho nhiều key hoặc value cùng một dòng lệnh)
7) incr key (tăng giá trị cho value của key lên 1, vi du: count = 8, incr count => count = 9)
8) incrby key number (tăng giá trị cho value của key tùy thích)
9) decr key (giảm giá trị cho value của key xuống 1 )
10) decrby key (giảm giá trị cho value của key xuống tùy thích)
11) expire key second (set thời gian hết hạn cho key)
11) ttl key (kiểm tra thời gian tồn tại của key)
12) keys * (hiển thị ra tất cả các key đã set)
