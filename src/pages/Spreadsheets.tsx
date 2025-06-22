
import React from 'react';
import Layout from '@/components/Layout';
import SpreadsheetsManager from '@/components/spreadsheets/SpreadsheetsManager';

const Spreadsheets = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <SpreadsheetsManager />
      </div>
    </Layout>
  );
};

export default Spreadsheets;
