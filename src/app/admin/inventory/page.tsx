'use client';
import {
  File,
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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Progress } from '@/components/ui/progress';
import { inventory } from '@/lib/admin-data';

export default function InventoryPage() {
  return (
    <div>
        <div className="flex items-center gap-4 mb-4">
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Quản lý Kho
            </h1>
            <div className="hidden items-center gap-2 md:ml-auto md:flex">
              <Button variant="outline" size="sm">
                <File className="h-4 w-4 mr-2" />
                Xuất file
              </Button>
              <Button size="sm">
                <PlusCircle className="h-4 w-4 mr-2" />
                Nhập kho
              </Button>
            </div>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Tồn kho nguyên liệu</CardTitle>
                <CardDescription>Theo dõi và quản lý số lượng nguyên liệu trong kho của bạn.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nguyên liệu</TableHead>
                            <TableHead className='w-[200px]'>Trạng thái</TableHead>
                            <TableHead className="text-right">Tồn kho</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {inventory.map(item => {
                            const stockPercentage = (item.stock / item.parLevel) * 100;
                            const isLowStock = item.stock < item.parLevel;
                            return (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">{item.name}</TableCell>
                                    <TableCell>
                                        <div className='flex items-center gap-2'>
                                            <Progress value={stockPercentage} className="h-2 w-[100px]" aria-label={`${stockPercentage}% in stock`} />
                                            {isLowStock ? 
                                                <Badge variant="destructive">Sắp hết</Badge> : 
                                                <Badge variant="outline" className="bg-green-100 text-green-800">Đầy đủ</Badge>
                                            }
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right font-mono">{item.stock} {item.unit}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Hiển thị <strong>{inventory.length}</strong> trên <strong>{inventory.length}</strong> nguyên liệu
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
