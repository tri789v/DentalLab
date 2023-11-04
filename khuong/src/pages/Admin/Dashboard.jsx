import React from "react";
import MenuNavbar from "../../components/MenuNavbar";

function Dashboard() {
  return (
    <>
    <MenuNavbar/>
      <div class="flex flex-col h-screen bg-gray-100 mt-20">
        <div class="flex-1 flex">
          <div
            class="p-2 bg-white w-60 flex flex-col hidden md:flex"
            id="sideNav">
            <nav>
              <a
                class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#">
                <i class="fas fa-home mr-2"></i>Inicio
              </a>
              <a
                class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#">
                <i class="fas fa-file-alt mr-2"></i>Autorizaciones
              </a>
              <a
                class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#">
                <i class="fas fa-users mr-2"></i>Usuarios
              </a>
              <a
                class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#">
                <i class="fas fa-store mr-2"></i>Comercios
              </a>
              <a
                class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white"
                href="#">
                <i class="fas fa-exchange-alt mr-2"></i>Transacciones
              </a>
            </nav>

            <a
              class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-cyan-300 hover:text-white mt-auto"
              href="#">
              <i class="fas fa-sign-out-alt mr-2"></i>Cerrar sesión
            </a>

            <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

          </div>

          <div class="flex-1 p-4">
            <div class="">
              <div class="bg-white p-4 rounded-md">
                <h2 class="text-gray-500 text-lg font-semibold pb-1">
                  Comercios
                </h2>
                <div class="my-1"></div>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <div class="chart-container">
                  <canvas id="commercesChart"></canvas>
                </div>
              </div>

              <div class="bg-white p-4 rounded-md">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">
                  Autorizaciones Pendientes
                </h2>
                <div class="my-1"></div>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <table class="w-full table-auto text-sm">
                  <thead>
                    <tr class="text-sm leading-normal">
                      <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                        Foto
                      </th>
                      <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                        Nombre
                      </th>
                      <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                        Rol
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Foto Perfil"
                          class="rounded-full h-10 w-10"
                        />
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Juan Pérez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Comercio
                      </td>
                    </tr>

                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Foto Perfil"
                          class="rounded-full h-10 w-10"
                        />
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        María Gómez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Usuario
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Foto Perfil"
                          class="rounded-full h-10 w-10"
                        />
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Carlos López
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Usuario
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Foto Perfil"
                          class="rounded-full h-10 w-10"
                        />
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Laura Torres
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Comercio
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Foto Perfil"
                          class="rounded-full h-10 w-10"
                        />
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Ana Ramírez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Usuario
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        <img
                          src="https://via.placeholder.com/40"
                          alt="Foto Perfil"
                          class="rounded-full h-10 w-10"
                        />
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Luis Martínez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        Comercio
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="text-right mt-4">
                  <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                    Ver más
                  </button>
                </div>
              </div>

              <div class="bg-white p-4 rounded-md mt-4">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">
                  Transacciones
                </h2>
                <div class="my-1"></div>
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                <table class="w-full table-auto text-sm">
                  <thead>
                    <tr class="text-sm leading-normal">
                      <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                        Nombre
                      </th>
                      <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                        Fecha
                      </th>
                      <th class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light text-right">
                        Monto
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Carlos Sánchez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        27/07/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $1500
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Ana Torres
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        28/07/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $2000
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Juan Ramírez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        29/07/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $1800
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        María Gómez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        30/07/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $2100
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Luis González
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        31/07/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $1700
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Laura Pérez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        01/08/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $2400
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Pedro Hernández
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        02/08/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $1950
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Sara Ramírez
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        03/08/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $1850
                      </td>
                    </tr>
                    <tr class="hover:bg-grey-lighter">
                      <td class="py-2 px-4 border-b border-grey-light">
                        Daniel Torres
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light">
                        04/08/2023
                      </td>
                      <td class="py-2 px-4 border-b border-grey-light text-right">
                        $2300
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div class="text-right mt-4">
                  <button class="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
