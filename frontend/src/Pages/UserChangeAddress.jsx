

function UserChangeAddress() {
 return (
    <div className="min-h-screen bg-white flex items-start justify-center pt-16">
      <div className="w-full max-w-md bg-white p-6 pb-12 rounded-2xl shadow-sm">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-800 mb-2">Street Address</label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-2">
              Apartment Number/Suit/Unit (Optional)
            </label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-2">City</label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-2">State</label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-2">Country</label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-800 mb-2">Zip Code</label>
            <input
              placeholder="Value"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 placeholder-gray-400 outline-none"
            />
          </div>

          <button className="w-full bg-zinc-800 text-white py-2 rounded-lg mt-2">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserChangeAddress;
