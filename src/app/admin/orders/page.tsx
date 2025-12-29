
'use client';
import {
  File,
  ListFilter,
  MoreHorizontal,
  PlusCircle,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
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
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { allOrders } from '@/lib/admin-data';
import type { Order, OrderStatus } from '@/lib/types';
import { useState } from 'react';

const statusMapping: Record<OrderStatus, { text: string; className: string }> = {
  new: { text: 'Mới', className: 'bg-blue-100 text-blue-800' },
  processing: { text: 'Đang làm', className: 'bg-yellow-100 text-yellow-800' },
  shipping: { text: 'Đang giao', className: 'bg-indigo-100 text-indigo-800' },
  completed: { text: 'Hoàn thành', className: 'bg-green-100 text-green-800' },
  cancelled: { text: 'Đã hủy', className: 'bg-red-100 text-red-800' },
};

const TABS: { value: string; label: string; statuses?: OrderStatus[] }[] = [
    { value: 'all', label: 'Tất cả' },
    { value: 'new', label: 'Mới', statuses: ['new'] },
    { value: 'processing', label: 'Đang xử lý', statuses: ['processing'] },
    { value: 'shipping', label: 'Đang giao', statuses: ['shipping'] },
    { value: 'completed', label: 'Hoàn thành', statuses: ['completed'] },
    { value: 'cancelled', label: 'Đã hủy', statuses: ['cancelled'] },
]

export default function OrdersPage() {
    const [activeTab, setActiveTab] = useState('all');

    const filteredOrders = activeTab === 'all'
        ? allOrders
        : allOrders.filter(order => TABS.find(t => t.value === activeTab)?.statuses?.includes(order.status));

    return (
        <Tabs defaultValue="all" onValueChange={setActiveTab}>
          <div className="flex items-center">
            <TabsList>
              {TABS.map(tab => <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>)}
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Lọc
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Lọc theo</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    7 ngày qua
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>30 ngày qua</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Năm nay</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-8 gap-1">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Xuất File
                </span>
              </Button>
              <Button size="sm" className="h-8 gap-1">
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Tạo đơn hàng
                </span>
              </Button>
            </div>
          </div>
            <Card>
              <CardHeader>
                <CardTitle>Đơn hàng</CardTitle>
                <CardDescription>
                  Quản lý và xem lịch sử các đơn hàng của bạn.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        Mã Đơn
                      </TableHead>
                      <TableHead>Khách hàng</TableHead>
                      <TableHead>Trạng thái</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Ngày đặt
                      </TableHead>
                      <TableHead className="text-right">Tổng tiền</TableHead>
                      <TableHead>
                        <span className="sr-only">Actions</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredOrders.map(order => (
                        <TableRow key={order.id}>
                            <TableCell className="hidden sm:table-cell font-medium">{order.id}</TableCell>
                            <TableCell>{order.customerName}</TableCell>
                            <TableCell>
                                <Badge variant="outline" className={statusMapping[order.status].className}>
                                    {statusMapping[order.status].text}
                                </Badge>
                            </TableCell>
                            <TableCell className="hidden md:table-cell">
                                {new Date(order.date).toLocaleDateString('vi-VN')}
                            </TableCell>
                            <TableCell className="text-right">{new Intl.NumberFormat('vi-VN').format(order.total)}đ</TableCell>
                             <TableCell>
                                <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                    aria-haspopup="true"
                                    size="icon"
                                    variant="ghost"
                                    >
                                    <MoreHorizontal className="h-4 w-4" />
                                    <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Hành động</DropdownMenuLabel>
                                    <DropdownMenuItem>Xem chi tiết</DropdownMenuItem>
                                    <DropdownMenuItem>In hóa đơn</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">
                                        Hủy đơn
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Hiển thị <strong>{filteredOrders.length}</strong> trên <strong>{allOrders.length}</strong> đơn hàng
                </div>
              </CardFooter>
            </Card>
        </Tabs>
    )
}
