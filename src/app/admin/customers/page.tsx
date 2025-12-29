
'use client'

import {
  File,
  PlusCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { customers } from '@/lib/admin-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';


export default function CustomersPage() {
  return (
    <div>
       <div className="flex items-center gap-4 mb-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Khách hàng
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                <File className="h-4 w-4 mr-2" />
                Xuất file
              </Button>
              <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                Thêm khách hàng
              </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Danh sách khách hàng</CardTitle>
                <CardDescription>Tổng hợp thông tin các khách hàng thân thiết của bạn.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Khách hàng</TableHead>
                            <TableHead className="hidden sm:table-cell">Email</TableHead>
                            <TableHead className="hidden sm:table-cell">Tổng đơn</TableHead>
                            <TableHead className="text-right">Tổng chi tiêu</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map(customer => (
                             <TableRow key={customer.id}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <Avatar className="h-9 w-9">
                                            <AvatarImage src={customer.avatar} alt="Avatar" />
                                            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="font-medium">{customer.name}</div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">{customer.email}</TableCell>
                                <TableCell className="hidden sm:table-cell">{customer.totalOrders}</TableCell>
                                <TableCell className="text-right">{new Intl.NumberFormat('vi-VN').format(customer.totalSpent)}đ</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
             <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Hiển thị <strong>{customers.length}</strong> trên <strong>{customers.length}</strong> khách hàng
                </div>
              </CardFooter>
        </Card>
    </div>
  )
}
