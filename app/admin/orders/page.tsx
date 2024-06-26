"use client";
import React from "react";
import CardComponent from "@/components/admin/dashboardCard";
import OrderDescription from "@/components/admin/orderDescription";
import TabsPanel from "@/components/admin/tabs";

const Order = () => {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <CardComponent />
        </div>
        <TabsPanel />
      </div>
      <div>
        <OrderDescription />
      </div>
    </main>
  );
};

export default Order;
